## Error States

All pages that fetch async data must handle an error state using `AppErrorState` (auto-imported from `app/components/AppErrorState.vue`).

### AppErrorState component

```html
<AppErrorState
  icon="i-lucide-cloud-off"
  title="..."
  description="..."
  sub-description="..."   <!-- optional second line -->
  error-code="..."        <!-- optional monospace code at bottom -->
>
  <!-- action buttons/links as slot -->
  <UButton color="primary" icon="i-lucide-refresh-cw" @click="retry">Retry</UButton>
  <UButton variant="ghost" color="neutral">Secondary Action</UButton>
</AppErrorState>
```

### Page convention

Pages own the `isError` state, derived from the store's `FetchStatus` enum via `storeToRefs`. Use `v-if="isError"` / `v-else` to switch between the error state and normal content. Page header and tabs remain visible — only the content area is replaced.

```html
<template v-if="ordersError">
  <AppErrorState icon="i-lucide-circle-alert" :title="$t('orders.error.title')" ...>
    <UButton color="primary" @click="fetchOrders">{{ $t('orders.error.retry') }}</UButton>
  </AppErrorState>
</template>
<template v-else>
  <!-- normal content -->
</template>
```

### Empty state vs error state

Only use `isError` (from the store's `FetchStatus`) when a failed fetch is meaningfully different from legitimately empty data:

| Case | Pattern |
|---|---|
| Cart — empty and failed load are indistinguishable to the user | No `isError`. Show `AppErrorState` when `items.length === 0 && !pending`. `useCustomFetch` toast already communicates the failure. |
| Orders/catalog — empty is a valid real state (e.g. new user) | Use `isError` from store. Distinguish `'error'` from `'success'` with empty data. |

### i18n keys

Error copy lives under each page's namespace:

| Page    | Keys                                                  |
|---------|-------------------------------------------------------|
| home    | `home.error.{title,desc,sub,retry,returnHome,code}`   |
| catalog | `catalog.error.{title,desc,refresh,checkStatus,code}` |
| orders  | `orders.error.{title,desc,retry,contactSupport}`      |
| cart    | `cart.empty.{title,desc,cta}`                         |

### Icon reference

| Context           | Icon                    |
|-------------------|-------------------------|
| Network / timeout | `i-lucide-cloud-off`    |
| General error     | `i-lucide-circle-alert` |
| Empty cart        | `i-lucide-shopping-bag` |
| Retry action      | `i-lucide-refresh-cw`   |
