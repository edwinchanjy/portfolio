## State Management (Pinia)

- **Library:** Use Pinia (`@pinia/nuxt`) for all shared/global state. Do not use Vuex or raw `provide`/`inject` for app-level state.
- **Store location:** Define stores in `app/stores/` (e.g., `app/stores/cart.ts`, `app/stores/user.ts`).
- **Store style:** Use the **Setup Store** syntax (`defineStore` with a setup function) for consistency with `<script setup lang="ts">`.
- **Naming:** Name stores with a `use` prefix and a `Store` suffix (e.g., `useCartStore`, `useUserStore`).
- **Auto-import:** Pinia stores are auto-imported by Nuxt — no explicit import needed in components/pages.
- **Local state:** Component-local state that is never shared belongs in `ref`/`reactive` inside the component, not in a store.
- **Store reference:** Always instantiate a store with a `const` named after the store (e.g., `const cartStore = useCartStore()`).
- **Destructuring actions:** Destructure actions directly from the store instance — `const { increment, decrement, removeItem } = cartStore`.
- **Destructuring state/getters:** Destructure reactive state and computed getters via `storeToRefs` — `const { items, subtotal, tax, total, itemCount } = storeToRefs(cartStore)`. Never destructure state directly from the store instance as it loses reactivity.
- **Fetch status — use a status enum, never `error: string`:** Model fetch state as a single mutually exclusive enum rather than independent `pending` and `isError` booleans. This eliminates manual resets and makes illegal states (e.g. simultaneously pending and errored) impossible. Expose `pending` and `isError` as computed properties so the page API stays clean:
  ```ts
  import type { FetchStatus } from '@/data/interfaces/fetch'

  const status = ref<FetchStatus>('idle')

  const pending = computed(() => status.value === 'pending')
  const isError = computed(() => status.value === 'error')

  async function fetchData() {
    status.value = 'pending'
    try {
      const response = await SomeRepository.getData()
      items.value = response.data.items
      status.value = 'success'
    } catch {
      status.value = 'error'
    }
  }
  ```
  Retrying simply calls the action again — setting `status` to `'pending'` automatically clears the error. Never put display strings in the store; let the page handle copy via `$t()`.
- **Multiple fetches in one store — use named status refs:** When a store has more than one fetch, give each its own status ref and derived computeds. Never share a single `status` ref across multiple fetches — they will conflict:
  ```ts
  const ordersStatus = ref<FetchStatus>('idle')
  const totalStatus = ref<FetchStatus>('idle')

  const ordersPending = computed(() => ordersStatus.value === 'pending')
  const ordersError = computed(() => ordersStatus.value === 'error')
  const totalPending = computed(() => totalStatus.value === 'pending')
  const totalError = computed(() => totalStatus.value === 'error')
  ```
  When a page needs multiple fetches in parallel, compose them at the call site — not in the store: `await Promise.all([fetchOrders(), fetchTotalValue()])`. The store exposes individual actions; orchestration is the page's responsibility. Only destructure refs that the page actually uses.
- **Error vs empty — know the difference:** Only expose `isError` when a failed fetch is meaningfully different from genuinely empty data. For the cart, empty items is treated as the error state (`useCustomFetch` toast already communicates the failure) — no `isError` needed. For orders/catalog, empty is a valid real state (e.g. a new user with no orders), so the status enum is required to distinguish a failed fetch from legitimately empty data.
- **Mutations — no error state in store:** For optimistic-update mutations (add, remove, update), do not set any error state in the store. `useCustomFetch` fires an error toast automatically for non-GET failures. Only roll back the optimistic update in the catch block and let the toast handle communication.
