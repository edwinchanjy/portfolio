## Color System

All colours flow through Nuxt UI's semantic CSS variable system. No custom colour values are permitted anywhere in the codebase outside of the `--ui-*` overrides already declared in `main.css`.

---

### Rule 1 — No custom colours in `@theme static`

`@theme static` registers only fonts and typography tokens. Never add colour entries there.

```css
/* ❌ wrong */
@theme static {
  --color-brand: #1a2b3c;
  --color-surface: #f0f0f0;
}

/* ✅ correct — colours belong in :root as --ui-* overrides */
:root {
  --ui-primary: #4a9eff;
}
```

---

### Rule 2 — No custom raw CSS variables for colours

Never declare custom `--my-colour` properties in `:root` or component `<style>`. Reference `--ui-*` variables directly wherever `var(...)` syntax is needed (CSS rules, inline styles, SVG attributes).

```css
/* ❌ wrong */
:root {
  --brand: #4a9eff;
  --surface-dark: #0d1520;
}
.thing {
  color: var(--brand);
}

/* ✅ correct */
.thing {
  color: var(--ui-primary);
}
```

---

### Rule 3 — Use Nuxt UI semantic Tailwind utilities in templates

Use the semantic utility classes that Nuxt UI registers. Never use hardcoded hex values or arbitrary colour classes.

| Concept                   | Tailwind utility                                 | Underlying variable     |
| ------------------------- | ------------------------------------------------ | ----------------------- |
| Page / card background    | `bg-default`                                     | `--ui-bg`               |
| Muted surface             | `bg-muted`                                       | `--ui-bg-muted`         |
| Elevated surface          | `bg-elevated`                                    | `--ui-bg-elevated`      |
| Default border            | `border-default`                                 | `--ui-border`           |
| Accented border           | `border-accented`                                | `--ui-border-accented`  |
| Primary text (headings)   | `text-highlighted`                               | `--ui-text-highlighted` |
| Body text                 | `text-default`                                   | `--ui-text`             |
| Secondary text            | `text-muted`                                     | `--ui-text-muted`       |
| Dimmed / placeholder text | `text-dimmed`                                    | `--ui-text-dimmed`      |
| Accent / CTA              | `text-primary` · `bg-primary` · `border-primary` | `--ui-primary`          |
| Success state             | `text-success` · `bg-success`                    | `--ui-success`          |
| Warning state             | `text-warning` · `bg-warning`                    | `--ui-warning`          |
| Error state               | `text-error` · `bg-error`                        | `--ui-error`            |

```html
<!-- ❌ wrong -->
<p class="text-[#dce9f7]">...</p>
<div class="bg-[#0d1520]">...</div>

<!-- ✅ correct -->
<p class="text-highlighted">...</p>
<div class="bg-muted">...</div>
```

---

### Rule 4 — Opacity variants use the `/` modifier, not hardcoded rgba

```html
<!-- ❌ wrong -->
<div style="background: rgba(8, 13, 20, 0.85)">...</div>

<!-- ✅ correct -->
<div class="bg-default/85">...</div>
```

For `var(...)` contexts (CSS rules, complex box-shadows) use `color-mix`:

```css
/* ❌ wrong */
box-shadow: 0 0 0 1px rgba(74, 158, 255, 0.3);

/* ✅ correct */
box-shadow: 0 0 0 1px color-mix(in srgb, var(--ui-primary) 30%, transparent);
```

---

### Rule 5 — Nuxt UI component colours via `--ui-*` overrides only

When a Nuxt UI component renders with the wrong colour, fix it by adjusting the `--ui-*` variable in `:root` — not by adding a `:ui` prop override with a hardcoded hex value.

```ts
/* ❌ wrong — hardcoded hex in :ui prop */
<UCard :ui="{ root: 'bg-[#0d1520]' }" />

/* ✅ correct — the --ui-bg-muted override in main.css already sets this */
<UCard />
/* or use the semantic utility */
<UCard :ui="{ root: 'bg-muted' }" />
```

---

### Rule 6 — No hardcoded hex colours anywhere

Inline styles, SVG attributes, keyframe animations, and CSS rules must never contain raw hex values. Use `var(--ui-*)` or the Tailwind opacity modifier instead.
