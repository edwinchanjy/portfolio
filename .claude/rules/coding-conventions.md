## Coding Conventions

- **Import paths:** Always use `@/` for non-auto-imported module paths (e.g., `import type { CartItemData } from '@/data/interfaces/cart'`). Never use `~/` — `@` is the configured alias in `nuxt.config.ts`.
- **Script block order:** Always place `<script setup lang="ts">` below the template block in `.vue` files.
- **Script style:** Use `<script setup lang="ts">`.
- **Type safety:** Always use TypeScript for type safety.
- **Avoid `any`:** Avoid using `any`. If a type is not yet defined, use `unknown` and narrow it down as soon as possible.
- **No `void` as generic type argument:** `void` is only valid as a function return type. Never use it as a generic type argument (e.g. `useCustomFetch<void>`). Use `never` instead for endpoints that return no response body (e.g. DELETE): `useCustomFetch<never>`.
- **Auto-imports:** Leverage Nuxt auto-imports for components, composables, and utils.
- **No redundant error handling for mutations:** `useCustomFetch` already fires error toasts automatically. Never set a store `error` string for mutation failures (add, remove, increment, decrement) — the toast is sufficient and the optimistic rollback handles the state. Double-displaying errors (toast + UAlert) is worse UX than a single toast.
- **API calls:** Never use `$fetch`, `useFetch`, or `useAsyncData` directly. All API calls must go through `useCustomFetch` (auto-imported from `app/composables/useCustomFetch.ts`), which handles auth, token refresh, lang injection, and error toasts automatically. Example:

  ```ts
  // In a composable (e.g., useCartApi)
  const data = await useCustomFetch<CartResponse>('/api/cart')
  
  // With options
  const result = await useCustomFetch<CartItemResponse>('/api/cart/items', {
    method: 'POST',
    body: item,
  })
  
  // Opt out of toast for read-only non-GET calls
  const data = await useCustomFetch<Order>(
    '/api/orders',
    { method: 'POST', body: payload },
    {
      shouldShowErrorToast: false,
    },
  )
  ```

- **Spacing & layout:** Always use tailwind classes for spacing and layout instead of custom CSS.
- **No arbitrary Tailwind values when a scale value exists:** Never use arbitrary bracket syntax for spacing, sizing, or layout when an equivalent Tailwind scale value exists. This applies to all spacing utilities: `w-`, `h-`, `p-`, `m-`, `gap-`, `top-`, `right-`, `bottom-`, `left-`, `inset-`, `max-w-`, `min-w-`, `ml-`, `mr-`, `mt-`, `mb-`, `pt-`, `pb-`, `pl-`, `pr-`, etc. Tailwind's spacing scale uses 4px increments (1 unit = 4px), plus fractional steps like `0.5` (2px), `1.5` (6px), `2.5` (10px). Convert px values by dividing by 4: `52px → pt-13`, `60px → pt-15`, `100px → pb-25`, `252px → w-63`, `260px → w-65`, `280px → max-w-70`. Arbitrary bracket syntax is only permitted when the value cannot be expressed in the scale — for example `em`-relative values (`min-h-[1.5em]`) or non-standard units (`clamp(...)` in inline styles).
- **Font sizes — named scale only:** The spacing-scale rule above applies to spacing utilities (`w-`, `h-`, `p-`, `m-`, `gap-`, etc.), **not
  font sizes**. Font sizes have their own named scale and must always use it. Never use numeric Tailwind fractions as font sizes (e.g. `text-3.
25`, `text-2.75` are **not** valid font-size classes — they compile as arbitrary sizes and bypass the type scale entirely). Valid font sizes
  are: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg`, `text-xl`, etc., plus any custom sizes explicitly defined in `main.cs
s` via `@theme static` (e.g. `--text-2xs: 0.625rem` → `text-2xs`). If the design requires a size not in the named scale, add it to `main.css`
  rather than using a fraction or arbitrary value.
- **Theming:** Use Nuxt UI theming for colors, typography, and shadows instead of custom styles.
- **Component decomposition:** Never build an entire page in a single `.vue` file. Break pages into focused, reusable components (e.g., `HeroSection.vue`, `ProductCard.vue`, `CartSummary.vue`) placed in `app/components/`. Pages in `app/pages/` should primarily compose components, not contain large inline templates.

- **Form validation — Zod v4 + UForm:** Use `zod@^4` (not v3) with `UForm :schema`. Zod v4 implements the Standard Schema protocol required by Nuxt UI v4. Use `z.string().min(1, ...)` for required fields; pass i18n strings from `useI18n().t()` as error messages. Always add a `canSubmit` computed that mirrors the schema's required fields and bind it to the submit button:

  ```ts
  import * as z from 'zod'
  
  const { t } = useI18n()
  
  const schema = z.object({
    email: z.string().min(1, t('validation.required')).email(t('validation.emailFormat')),
  })
  const state = reactive({ email: '' })
  const canSubmit = computed(() => !!state.email.trim())
  // Template: <UButton type="submit" :disabled="!canSubmit" class="... disabled:cursor-not-allowed disabled:opacity-40">
  ```

- **Always use `v-model` over `:model-value` + `@update:model-value`:** The explicit pair is just the verbose form of `v-model`.

  ```ts
  // ✅ correct — clean template, no manual spreading
  const search = ref('')
  // Template: <UInput v-model="search" />
  
  // ❌ wrong
  // <UInput :model-value="modelValue.search" @update:model-value="emit('update:modelValue', { ...modelValue, search: $event })" />
  ```

- **Script readability:** Separate unrelated `const` groups with a blank line. Store instantiation, action destructuring, and state destructuring are one group; unrelated composables (e.g., `useLocalePath`, `useI18n`) are another. Example:

  ```ts
  const localePath = useLocalePath()
  
  const cartStore = useCartStore()
  const { increment, decrement, removeItem } = cartStore
  const { items, subtotal, tax, total } = storeToRefs(cartStore)
  ```
