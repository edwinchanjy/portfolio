## Design System

Dark-mode personal portfolio. Cool blue-gray palette, clean grotesque typography, quiet developer personality. No gradients, no warm tones, no decoration for its own sake.

---

### Palette

All colours are expressed as Nuxt UI semantic utilities or `--ui-*` variables. Never hardcode hex values. See `colors.md` for the full enforcement rules.

**Surfaces (light to dark):**
| Utility | Role |
|---|---|
| `bg-default` | Artboard root / main content background |
| `bg-muted` | Cards, panels, sidebar |
| `bg-elevated` | Hover states, raised panels |

**Borders:**
| Utility | Role |
|---|---|
| `border-default` | Subtle dividers |
| `border-accented` | Default visible borders, hover borders |

**Text:**
| Utility | Role |
|---|---|
| `text-highlighted` | Headings, important labels |
| `text-default` | Body text, descriptions |
| `text-muted` | Dim — section labels, dates, nav |
| `text-dimmed` | Very dim — meta, comments, footer |

**Accent / primary:** `text-primary` · `bg-primary` · `border-primary`

**Status:** `text-success` · `text-warning` · `text-error`

---

### Typography

| Token | Family | Role |
|---|---|---|
| `font-display` (Space Grotesk) | Headings, hero name, large labels — tight tracking, strong weight |
| `font-sans` (DM Sans) | Body text, UI labels, navigation |
| `font-mono` (JetBrains Mono) | Code, section numbers, dates, meta labels |

**Rules:**
- Headings always use `font-display`
- Body and UI always use `font-sans`
- Numbers, dates, codes, section markers always use `font-mono`
- Never mix serif into the system
- Line height: headings `leading-none` / `leading-tight`, body `leading-relaxed`

**Type scale:**
| Element | Size | Weight | Tracking |
|---|---|---|---|
| Hero name | `clamp(56px, 6vw, 96px)` inline style | 700 | `tracking-display` (−0.035em) |
| Section h3 | `text-section-h3` (32px) | 700 | `tracking-tight` |
| Card heading | `text-xl` (20px) | 600 | `tracking-tight` |
| Body | `text-base` (16px) | 400 | — |
| Body large | `text-lg` (18px) | 400 | — |
| Small body | `text-sm` (14px) | 400 | — |
| Section labels | `text-label` (10.5px) | 500 | `tracking-14` (0.14em), uppercase, mono |

---

### Component Conventions

**Cards**
- Background: `bg-muted` → `bg-elevated` on hover (via `card-hover` global class)
- Border: `border-default` → `border-accented` on hover (via `card-hover`)
- `transform: translateY(-1px)` on hover
- Border radius: `rounded-lg` (8px)
- Use `<UCard>` with `:ui="{ root: 'bg-muted border border-default rounded-lg card-hover' }"`

**Buttons (ghost / outline)**
- Default: `border-accented bg-muted text-default`
- Hover: `hover:border-accented hover:bg-elevated hover:text-highlighted`
- Border radius: `rounded-md` — never `rounded-full`
- Font: `font-sans`

**Accent buttons (CTA)**
- `border-primary/30 bg-primary/10 text-primary hover:bg-primary/18`

**Tags / chips**
- `border-accented bg-muted text-muted rounded text-xs font-mono`

**Section headers**
- Number label: `text-label tracking-14 text-dimmed font-mono`
- Name label: `font-display text-muted text-xs font-semibold tracking-widest uppercase`
- Separated from content by `border-default border-b pb-3.5`

**Icons**
- Custom stroke SVGs, 18–20px viewBox
- `stroke="currentColor"` · `stroke-width="1.5–1.6"` · `stroke-linecap="round"` · `stroke-linejoin="round"`
- Colour: `text-primary` at `opacity-70` — no fills except small accent circles

**Status dot**
- `size-1.5 rounded-full bg-success dot-pulse` for available/healthy states
- Box-shadow glow: `color-mix(in srgb, var(--ui-success) 50%, transparent)`

**Shadows**
- Ambient card shadow: `0 8px 32px rgba(0,0,0,0.45)` — never pure black, always with transparency
- Accent ring: `color-mix(in srgb, var(--ui-primary) 30%, transparent)` via `color-mix`

---

### Layout

**Desktop (≥ 1024px):** Fixed 252px sidebar + flexible main (`lg:ml-[252px]`)

**Mobile (< 1024px):** Hidden sidebar → sticky 52px top bar + hamburger drawer

**Responsive grid patterns:**
| Section | Desktop | Mobile |
|---|---|---|
| Stack | 3-col | 1-col |
| Web3 | 2-col | 1-col |
| Homelab | 4-col | 2-col |
| AI Workflow | 3-col | 1-col |
| About | prose + sticky stat grid | stacked |

---

### Dos and Don'ts

**Do**
- Use `font-display` for anything that needs to command attention
- Use `font-mono` for numbers, dates, labels, technical metadata
- Keep icons at 65–75% opacity — they support, not dominate
- Add `card-hover` class for all interactive card lift effects

**Don't**
- Add gradients to backgrounds
- Use warm colours — this is a cool-only palette
- Mix serif typefaces into the system
- Use emoji (use SVG icons instead)
- Use `rounded-full` on buttons or cards
- Use `maxWidth` on section-level prose (About uses a two-column layout instead)
- Use 1px borders for section separation — use background colour shifts (`bg-muted`, `bg-elevated`)
