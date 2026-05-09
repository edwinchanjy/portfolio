## Anti-Patterns

A catalogue of patterns explicitly forbidden in this codebase, with the correct alternative for each.

---

### State Management

**❌ `error: string | null` in stores**
```ts
// Wrong
const error = ref<string | null>(null)
// ...
error.value = 'Failed to load orders'
```
Stores have no i18n context — never hold display strings. Use `FetchStatus` enum; expose `isError` as a computed boolean. Let the page handle copy via `$t()`.

---

**❌ Independent `pending` + `isError` booleans**
```ts
// Wrong — requires manual reset on every fetch call, allows impossible states
const pending = ref(false)
const isError = ref(false)
pending.value = true
isError.value = false // easy to forget
```
Use a single `FetchStatus` enum (`'idle' | 'pending' | 'success' | 'error'`) with `pending` and `isError` as derived computeds. Setting `status = 'pending'` automatically clears the error.

---

**❌ Shared `status` ref across multiple fetches in the same store**
```ts
// Wrong — fetchOrders and fetchTotalValue would conflict
const status = ref<FetchStatus>('idle')
```
Give each fetch its own named status ref: `ordersStatus`, `totalStatus`. Expose `ordersPending`, `ordersError`, `totalPending`, `totalError` as separate computeds.

---

**❌ `fetchAll` wrapper in store for orchestrating multiple fetches**
```ts
// Wrong — store shouldn't own orchestration
async function fetchAll() {
  await Promise.all([fetchOrders(), fetchTotalValue()])
}
```
Compose at the call site: `await Promise.all([fetchOrders(), fetchTotalValue()])`. The store exposes individual actions; pages decide what to call and in what order.

---

**❌ Setting error state in the store for mutations**
```ts
// Wrong
} catch {
  error.value = 'Failed to remove item'
}
```
`useCustomFetch` fires an error toast automatically for non-GET failures. In mutation catch blocks, only roll back the optimistic update — never set error state.

---

**❌ Promoting page-local UI state to Pinia**
```ts
// Wrong — active tab, sort order, filter selection are UI concerns
const useOrdersStore = defineStore('orders', () => {
  const activeTab = ref('all') // ❌
})
```
Tabs, sort keys, and filter selections belong in `ref` inside the component or page. Use Pinia only for state that is shared across multiple pages or components.

---

### API & Fetch

**❌ Using `$fetch`, `useFetch`, or `useAsyncData` directly**
```ts
// Wrong
const data = await $fetch('/api/orders')
const { data } = useFetch('/api/orders')
```
All API calls must go through `useCustomFetch`, which handles auth, token refresh, locale injection, and error toasts automatically.

---

**❌ API calls directly in components or stores**
```ts
// Wrong — store calling useCustomFetch directly
const response = await useCustomFetch<OrdersResponse>('/orders')
```
Stores call repositories. Repositories call `useCustomFetch`. Components never call either directly.

---

**❌ Repository as a composable**
```ts
// Wrong
export function useOrdersRepository() { ... }
```
Repositories are plain objects exported as default — not composables. They have no Vue reactivity and need none.

---

**❌ Handling session expiry in stores or pages**
```ts
// Wrong — store shouldn't know about auth
} catch (e) {
  if (e.status === 401) navigateTo('/login') // ❌
}
```
Token refresh, session expiry, and auth redirects are `useCustomFetch`'s responsibility. By the time a store's `catch` runs, it should only handle data errors.

---

### TypeScript

**❌ `void` as a generic type argument**
```ts
// Wrong
await useCustomFetch<void>('/cart/items/1', { method: 'DELETE' })
```
`void` is only valid as a function return type. Use `never` for endpoints that return no body: `useCustomFetch<never>(...)`.

---

**❌ `~/` import paths**
```ts
// Wrong
import type { CartItemData } from '~/data/interfaces/cart'
```
Always use `@/` — it is the configured alias in `nuxt.config.ts`.

---

### i18n

**❌ Hardcoded user-facing strings**
```html
<!-- Wrong -->
<p>Your cart is empty</p>
<UButton>Retry</UButton>
```
All user-facing strings must go through `$t('key')` or `useI18n().t('key')`.

---

**❌ Display strings in stores or repositories**
```ts
// Wrong
error.value = 'Something went wrong'
throw new Error('Not found')
```
Stores and repositories have no i18n context. Expose boolean state (`isError`) and let the page/component layer translate it.

---

### Components & UI

**❌ Entire page built in a single `.vue` file**
Pages in `app/pages/` should compose components. If a template exceeds ~30 lines of meaningful markup, extract components into `app/components/`.

---

**❌ Custom CSS shimmer/skeleton**
```html
<!-- Wrong -->
<div class="animate-pulse bg-gray-200 h-4 w-32"></div>
```
Use `<USkeleton class="h-4 w-32" />` — Nuxt UI's built-in skeleton component.

---

**❌ Raw HTML elements instead of Nuxt UI**
```html
<!-- Wrong -->
<button class="...">Submit</button>
<input class="..." />
```
Use `<UButton>`, `<UInput>`, `<UCard>`, etc. from Nuxt UI for all interactive elements.

---

**❌ 1px borders for section separation**
```html
<!-- Wrong -->
<div class="border-b border-gray-200">...</div>
```
Section boundaries use background color shifts only (`bg-surface`, `bg-surface-low`, `bg-surface-mid`). See `design-system.md`.

---

**❌ Black text or full border-radius on buttons**
```html
<!-- Wrong -->
<p class="text-black">...</p>
<UButton class="rounded-full">...</UButton>
```
Use `text-on-surface` (`#2d3435`) for text. Use `rounded-md` for buttons — `full` roundness is for playful brands, not this system.
