## Architecture

**Nuxt 4 + Nuxt UI** starter template. The app lives entirely under `app/`:

- `app/app.vue` — root layout; wraps every page with `<UApp>`, `<UHeader>`, `<UMain>`, `<UFooter>`
- `app/pages/` — file-based routing (Nuxt auto-generates routes)
- `app/components/` — auto-imported; no explicit imports needed
- `app/assets/css/main.css` — Tailwind + Nuxt UI imports + custom green color palette via `@theme static`
- `app/app.config.ts` — sets Nuxt UI theme (`primary: green`, `neutral: slate`)
- `app/stores/` — Pinia stores
- `app/repositories/` — API call groupings by domain (e.g., `CartRepository.ts`). Plain objects, not composables. All methods must be `async` and `await` the `useCustomFetch` call.
- `app/composables/` — Vue composables auto-imported by Nuxt; reserve for logic that needs reactivity
- `app/data/interfaces/` — TypeScript interfaces for data types and API shapes
- `app/data/interfaces/api/` — raw API response types (snake_case, `Raw` suffix); never leak past the repository

`nuxt.config.ts` at the root enables five modules: `@nuxt/eslint`, `@nuxt/ui`, `@nuxt/image`, `@nuxtjs/i18n`, `@pinia/nuxt`. The homepage (`/`) is prerendered.

---

## Layer Boundaries

Each layer has a strict responsibility. If you are unsure where something belongs, use this as the decision guide.

### Page (`app/pages/`)
- Composes components — no large inline templates (>~30 lines of markup → extract a component)
- Calls store actions on mount (`await fetchOrders()`)
- Owns UI-only state that is never shared: active tab, sort key, filter selection (`ref` inside the page)
- Derives `isLoading`/`isError` from store via `storeToRefs` and passes them as props to components
- No direct API calls, no `useCustomFetch`, no repository access

### Component (`app/components/`)
- Receives data via props, emits events up — never reaches into a store unless it is explicitly a smart/container component
- Accepts `isLoading?: boolean` for skeleton state
- No API calls, no repository access

### Store (`app/stores/`)
- Owns shared async state: `items`, `FetchStatus` enum, derived `pending`/`isError` computeds
- Calls repositories — never `useCustomFetch` directly
- No display strings, no i18n, no navigation logic
- Only use Pinia for state that is shared across pages or components; page-local UI state stays in the page

### Repository (`app/repositories/`)
- Plain objects (not composables) — one file per domain
- All methods call `useCustomFetch` — nothing else
- Transforms raw API snake_case shapes → clean camelCase types before returning (anti-corruption layer)
- No state, no side effects beyond the HTTP call
- Define `const prefix = '/domain'` at the top of each repository and reuse it in all endpoint strings (e.g. `` `${prefix}/total` ``)

### Composable (`app/composables/`)
- For reusable logic that needs Vue reactivity (refs, lifecycle hooks, watchers)
- `useCustomFetch` is the single HTTP entry point for the entire app — handles auth, token refresh, locale, and error toasts

---

## Canonical Reference Implementation

**`CartRepository.ts` → `cart.ts` → `cart.vue`** is the canonical example of a complete feature stack.

When building a new domain, follow this chain exactly:

1. **Repository** — defines typed `useCustomFetch` calls, maps raw → clean types
2. **Store** — owns `items`, `FetchStatus` enum, derived computeds, actions that call the repository
3. **Page** — calls store action on mount, derives loading/error state, passes as props to components
4. **Components** — accept `isLoading` prop, render skeleton or real content via `v-if`/`v-else`
