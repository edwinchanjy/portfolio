Fetch an endpoint from Postman and generate typed repository + store + i18n wiring for this Nuxt 4 codebase.

**Usage:** `/postman-implement <collection-id>/<request-name-or-path>`

---

Arguments: $ARGUMENTS

Parse $ARGUMENTS: the first segment (before `/`) is the collection ID, the remainder is the request name or folder path to target.

## Steps

### 1. Fetch the collection

Call `mcp__plugin_postman_postman__getCollection` with the collection ID.

Walk the `item` tree to locate the request matching the name/path provided. If no exact match, pick the closest match and tell the user which one you chose.

### 2. Analyse the request

From the matched request extract:
- **Method** — GET, POST, PUT, PATCH, DELETE
- **URL** — full path, path variables (`:id`), query params
- **Request body** — schema or example JSON
- **Response examples** — field names, types, nesting (note snake_case fields — they must be mapped to camelCase in the repository)
- **Auth headers** — note if Bearer token is expected (handled by `useCustomFetch` automatically; do not add manually)

If the collection has a linked OpenAPI spec, also call `mcp__plugin_postman_postman__getSpecDefinition` for richer type information.

### 3. Determine the domain

Map the endpoint to an existing domain (`cart`, `orders`, `catalog`, `home`) or propose a new one. Check `app/repositories/` and `app/stores/` for existing files to extend rather than create new ones.

### 4. Generate code following the canonical stack

Follow `CartRepository.ts → cart.ts → cart.vue` as the reference. Build in this order:

#### Raw interface (`app/data/interfaces/api/<domain>.ts`)

```ts
// snake_case, Raw suffix — never leaks past the repository
export interface RawOrderItem {
  order_id: number
  product_name: string
  unit_price: number
}
```

#### Clean interface (`app/data/interfaces/<domain>.ts`)

```ts
// camelCase — used everywhere above the repository layer
export interface OrderItem {
  orderId: number
  productName: string
  unitPrice: number
}
```

#### Repository (`app/repositories/<Domain>Repository.ts`)

```ts
// Plain object, not a composable. All methods async.
const <Domain>Repository = {
  async get<Resource>(): Promise<<CleanType>> {
    const raw = await useCustomFetch<Raw<Type>>('/endpoint')
    return { camelCasedField: raw.snake_case_field }
  },
}
export default <Domain>Repository
```

- Use `useCustomFetch<never>` for DELETE endpoints (no response body)
- Use `{ shouldShowErrorToast: false }` only if the call is a non-GET mutation where silent failure is intentional

#### Store (`app/stores/<domain>.ts`) — extend or create

- `FetchStatus` enum pattern with named status refs per fetch
- `pending` and `isError` as `computed()` — never raw booleans
- Action calls repository, never `useCustomFetch` directly
- No display strings, no i18n

#### i18n keys (`i18n/locales/en.json` + `zh.json`)

Add any error/empty copy the page will need:
```json
"<domain>": {
  "error": { "title": "...", "desc": "...", "retry": "..." }
}
```

### 5. Show a usage summary

After generating all files, show:
- Which files were created or modified
- The store actions and state refs exposed
- An example snippet of how the page should call the store and pass props to components
- Any follow-up steps (e.g. "wire the store into `orders.vue` by adding `fetchOrders()` to `onMounted`")
