## Skeleton Loading States

All components that display async or page-level data must support a skeleton loading state via an `isLoading` prop.

### USkeleton

Use Nuxt UI's built-in `<USkeleton>` component for all skeleton placeholders. Do not use custom CSS or `<div>` elements with shimmer classes. Size via the `class` prop:

```html
<USkeleton class="h-4 w-32" />
<USkeleton class="size-24 rounded-lg" />
<USkeleton class="aspect-square" />
```

### Component convention

Every component that can appear in a loading context must declare `isLoading?: boolean` as a prop:

```ts
defineProps<{
  isLoading?: boolean
  // ...existing props
}>()
```

Use `v-if="isLoading"` / `v-else` to switch between the skeleton and real content. The skeleton must mirror the shape and layout of the real content — same outer container, same spacing, skeleton divs replacing text and images.

```html
<UCard v-if="isLoading" ...>
  <!-- skeleton divs matching the card's layout -->
</UCard>
<UCard v-else ...>
  <!-- real content -->
</UCard>
```

### Skeleton sizing guidelines

Match skeleton block sizes to the content they replace:

| Content type | Skeleton size |
|---|---|
| Label / eyebrow text | `h-3 w-20` |
| Body text line | `h-4 w-full` or `h-4 w-3/4` |
| Heading (h2/h3) | `h-6 w-40` |
| Display heading (h1) | `h-16 w-full` |
| Button | `h-11 w-32 rounded-md` |
| Small thumbnail | `size-24 rounded-lg` |
| Medium thumbnail | `size-32 rounded-lg` |
| Product card image | `aspect-square` |

### Page convention

Pages own the `isLoading` state and pass it down to components. `isLoading` is derived from the store's `pending` computed (which itself is derived from the `FetchStatus` enum):

```ts
const { ordersPending } = storeToRefs(ordersStore)
// Pass: :is-loading="ordersPending"
```

For list components, render N skeleton instances (typically 3) when loading:

```html
<template v-if="isLoading">
  <OrdersCard v-for="n in 3" :key="n" :is-loading="true" :order="{} as any" />
</template>
<template v-else>
  <OrdersCard v-for="order in orders" :key="order.id" :order="order" />
</template>
```

### Components with loading state

All components in this project already implement `isLoading`:

- `ProductCard.vue`
- `home/Hero.vue`, `home/Featured.vue`, `home/Series.vue`, `home/Registry.vue`
- `cart/Item.vue`, `cart/Summary.vue`
- `catalog/Sidebar.vue`, `catalog/ProductGrid.vue`
- `orders/Card.vue`
