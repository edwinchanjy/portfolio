# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
pnpm typecheck    # TypeScript type checking
```

No test suite is configured. CI runs `lint` + `typecheck` on push.

## Canonical Reference Implementation

When building a new domain feature, follow the established pattern end-to-end:

**`CartRepository.ts` → `cart.ts` → `cart.vue`** is the canonical full-stack example.

1. Repository (`app/repositories/`) — typed `useCustomFetch` calls, raw → clean type mapping
2. Store (`app/stores/`) — `FetchStatus` enum, derived `pending`/`isError` computeds, actions
3. Page (`app/pages/`) — calls store action on mount, passes state as props
4. Components (`app/components/`) — `isLoading` prop, skeleton / real content via `v-if`/`v-else`

## Rules

When making changes, ensure compliance with the following rules:

@.claude/rules/architecture.md
@.claude/rules/design-system.md
@.claude/rules/colors.md
@.claude/rules/ui-components.md
@.claude/rules/coding-conventions.md
@.claude/rules/state-management.md
@.claude/rules/i18n.md
@.claude/rules/skeleton-states.md
@.claude/rules/error-states.md
@.claude/rules/anti-patterns.md
