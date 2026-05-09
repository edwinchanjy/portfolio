## UI & Component Guidelines (Nuxt UI)

- **Library:** Use Nuxt UI components (@nuxt/ui) for all UI elements.
- **Styling:** Use Tailwind CSS v4 classes for layout, spacing, and minor overrides.
- **Components:** Prefer pre-built Nuxt UI components (e.g., UButton, UCard, UModal, UForm) over custom HTML/CSS.
- **Icons:** Use `@nuxt/icon` for icons (e.g., `<UIcon name="i-heroicons-..." />`).
- **Images:** Use `@nuxt/image` for optimized images (`<NuxtImg src="/path" width="..." height="..." />`).
- **Form Handling:** Use Nuxt UI forms combined with Zod for validation.

## Design Fidelity — Closing the Gap Between Design and Nuxt UI

Nuxt UI components ship with their own default height, padding, border-radius, color, and focus styling. These defaults **will not match the design** without explicit overrides. This is the single most common cause of visual divergence.

**Rule:** After implementing any UI from a design file, cross-reference every rendered element against the design source. Where a Nuxt UI component default diverges — height, padding, background, border, font size — close the gap using the `:ui` prop or Tailwind class overrides. Never accept a component library default as a substitute for what is shown in the design.

**How to override:**

- Use the `:ui` prop for structural slots and internal element classes: `<UInput :ui="{ base: 'bg-surface-container h-9' }" />`
- Use the `class` prop for outer wrapper overrides: `<UButton class="h-9 px-4" />`
- For elements where Nuxt UI overrides are insufficient, use a raw `<input>`, `<select>`, or `<button>` styled entirely with Tailwind — this is preferable to shipping a visually wrong Nuxt UI component

**Always use Tailwind classes over inline styles:**
Never use `style="..."` when a Tailwind utility exists for the same property. Use Tailwind's opacity modifier syntax (`bg-primary/12`, `border-primary/18`) to express rgba values using design tokens — no hardcoded `rgba()` in inline styles. Inline `style` is only acceptable for values that Tailwind cannot express at all (e.g. `border: 1.5px dashed` where non-standard border widths have no Tailwind equivalent).

```html
<!-- ❌ wrong — hardcodes rgba, bypasses design tokens -->
<div style="background: rgba(180, 197, 255, 0.12); border: 1px solid rgba(180, 197, 255, 0.18)">

<!-- ✅ correct — uses token + opacity modifier -->
<div class="bg-primary/12 border border-primary/18">
```

**Responsive variants — always mirror all breakpoints:**
When overriding a slot class that has responsive variants, include every variant in the replacement — not just the base class. Nuxt UI merges slot classes, so omitting a responsive variant leaves the original breakpoint-specific class in place.

```ts
// ❌ wrong — sm:p-6 from the default is still active at ≥640px
modal: {
  body: 'p-0'
}

// ✅ correct — both breakpoints are explicitly overridden
modal: {
  body: 'p-0 sm:p-0'
}
```

Before writing any `:ui` or `app.config.ts` slot override, check whether the target slot has responsive variants (`sm:`, `md:`, `lg:`, etc.) and replicate them all.

**Shared overrides belong in `app.config.ts`, not repeated `:ui` props:**
If the same `:ui` customization appears on two or more instances of the same component, move it to `app.config.ts` under `ui.<ComponentName>` so it applies globally. Per-instance `:ui` props are only for overrides that differ between instances.

```ts
// app.config.ts — applied to every UInput in the app
export default defineAppConfig({
  ui: {
    input: {
      base: 'bg-surface-container',
    },
    button: {
      defaultVariants: {
        size: 'md',
      },
    },
  },
})
```

```vue
<!-- ✅ correct — shared style is in app.config.ts, :ui only for instance-specific overrides -->
<UInput />
<UInput :ui="{ base: 'font-mono' }" />   <!-- only when this instance needs something extra -->

<!-- ❌ wrong — same :ui repeated on every instance -->
<UInput :ui="{ base: 'bg-surface-container' }" />
<UInput :ui="{ base: 'bg-surface-container' }" />
```

**What to check before marking a task done:**

- Input height and padding match the design
- Dropdown/select background, border, and chevron match
- Button height, padding, and font weight match
- Table row height, column widths, hover state, and separator style match
- Badge font size, padding, and dot/color match exactly
