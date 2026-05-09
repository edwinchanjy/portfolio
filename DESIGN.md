# Design System — Edwin Chan Portfolio

## Overview

A dark-mode personal portfolio with a cool blue-gray palette, clean grotesque typography, and a quiet developer personality. The design language is intentional and restrained — no gradients, no decoration for its own sake, no warm tones.

---

## Color Palette

### Surfaces

| Token        | Value     | Usage                           |
| ------------ | --------- | ------------------------------- |
| `--bg-0`     | `#060b10` | Canvas / page background        |
| `--bg-1`     | `#080d14` | Artboard root / main content bg |
| `--bg-2`     | `#0d1520` | Cards, panels, sidebar          |
| `--bg-3`     | `#12202e` | Hover states, raised panels     |
| `--bg-inset` | `#050a0f` | Inset surfaces, code blocks     |

### Borders

| Token      | Value     | Usage                |
| ---------- | --------- | -------------------- |
| `--line-1` | `#111e2e` | Subtle dividers      |
| `--line-2` | `#182840` | Default borders      |
| `--line-3` | `#223650` | Hover/active borders |

### Text

| Token      | Value     | Usage                                |
| ---------- | --------- | ------------------------------------ |
| `--text-1` | `#dce9f7` | Primary — headings, important labels |
| `--text-2` | `#7a9dc0` | Secondary — body text, descriptions  |
| `--text-3` | `#5a87b0` | Dim — section labels, dates, nav     |
| `--text-4` | `#3d5f7a` | Very dim — meta, comments, footer    |

### Accent

| Token           | Value                  | Usage                                                   |
| --------------- | ---------------------- | ------------------------------------------------------- |
| `--accent`      | `#4a9eff`              | Electric blue — links, icons, active states, highlights |
| `--accent-dim`  | `rgba(74,158,255,.10)` | Accent tint for backgrounds                             |
| `--accent-line` | `rgba(74,158,255,.30)` | Accent-tinted borders                                   |

### Status

| Token    | Value     | Usage                         |
| -------- | --------- | ----------------------------- |
| `--ok`   | `#3cd68a` | Running / healthy / available |
| `--warn` | `#f0c040` | Caution / notice              |
| `--err`  | `#ff5050` | Error / unavailable           |
| `--info` | `#7ab8ff` | Informational                 |

---

## Typography

### Font Families

| Token            | Family         | Role                                                          |
| ---------------- | -------------- | ------------------------------------------------------------- |
| `--font-display` | Space Grotesk  | Headings, large labels, names — tight tracking, strong weight |
| `--font-sans`    | DM Sans        | Body text, UI labels, navigation — clean and neutral          |
| `--font-mono`    | JetBrains Mono | Code, section numbers, dates, meta labels                     |

### Scale (desktop)

| Element        | Size                     | Weight | Notes                              |
| -------------- | ------------------------ | ------ | ---------------------------------- |
| Hero name      | `clamp(56px, 6vw, 96px)` | 700    | Tightest tracking (`-0.035em`)     |
| Section h2     | `36px`                   | 700    | `-0.025em` tracking                |
| Section h3     | `32px`                   | 700    | `-0.02em` tracking                 |
| Card heading   | `20px`                   | 600    | `-0.01em` tracking                 |
| Body           | `16px`                   | 400    | `1.75` line height                 |
| Body large     | `18px`                   | 400    | Hero lede                          |
| Small body     | `14–15px`                | 400    | Card descriptions                  |
| Section labels | `10.5px`                 | 500    | Mono, `0.14em` tracking, uppercase |
| Nav labels     | `13.5px`                 | 400    | DM Sans                            |

### Rules

- Headings always use `--font-display`
- Body and UI always use `--font-sans`
- Numbers, dates, codes, section markers always use `--font-mono`
- Line height: headings `1.0–1.1`, body `1.65–1.75`
- Never mix serif into the system

---

## Spacing Scale

Uses CSS custom properties that adjust with `data-density` on the root element.

| Token   | Normal | Compact | Cozy |
| ------- | ------ | ------- | ---- |
| `--d-1` | 4px    | 3px     | 5px  |
| `--d-2` | 8px    | 6px     | 10px |
| `--d-3` | 12px   | 9px     | 14px |
| `--d-4` | 16px   | 12px    | 20px |
| `--d-5` | 24px   | 18px    | 30px |
| `--d-6` | 32px   | 24px    | 40px |
| `--d-7` | 48px   | 36px    | 60px |

---

## Components

### Cards (`HCard`)

- Background: `--bg-2` → `--bg-3` on hover
- Border: `--line-1` → `--line-3` on hover
- `transform: translateY(-1px)` on hover
- Border radius: `8px`
- Transition: `background .14s, border-color .14s, transform .14s`
- Padding: `18–22px`

### Buttons (`.btn`)

- Background: `--bg-2`, border: `--line-2`, color: `--text-2`
- Hover: `--bg-3`, `--line-3`, `--text-1`
- Font: `--font-sans`, 13px
- Padding: `7px 14px`, border-radius: `6px`
- Accent variant: blue text, `--accent-line` border, `--accent-dim` background

### Chips (`.chip`)

- Pill shape, `border-radius: 4px`
- 11.5px `--font-sans`, `--text-3`, `--bg-2` background
- Accent variant: `--accent` text, `--accent-line` border, `--accent-dim` background

### Status Dot (`.dot`)

- 7×7px circle
- `.ok` → `--ok` with green glow
- `.acc` → `--accent` with blue glow
- `.pulse` animation: `softpulse 2.8s ease-in-out infinite`

### Section Labels

- Mono, 10.5px, `0.14em` letter spacing, uppercase, `--text-4` color
- Always paired with a section number (e.g. `01`, `07`)

### Icons

- All custom, 18–20px stroke SVGs
- `stroke="currentColor"`, `strokeWidth="1.5–1.6"`, `strokeLinecap="round"`, `strokeLinejoin="round"`
- Rendered at `color: var(--accent)`, `opacity: 0.65–0.75`
- No fills except for small accent circles

### FadeUp Animation

- `opacity: 0` + `translateY(18px)` → `opacity: 1` + `translateY(0)`
- Triggered by `IntersectionObserver` on scroll
- Duration: `0.6s`, easing: `cubic-bezier(.2,.8,.3,1)`
- Staggered with `delay` prop (multiples of 60ms)

### Cycling Headline

- Loops through 4–5 phrases every 3.4s
- Two transition modes (user-selectable via Tweaks): **fade** or **slide up**
- Font: `--font-display`, 22–24px, `--accent` color

---

## Layout

### Desktop (> 1060px)

- Two-column layout: fixed 252px sidebar + flexible main
- Sidebar: sticky, `100vh`, scrollspy nav with active glowing dot
- Main: `overflowY: auto`, `padding: 60px 80px 100px`
- Content is full-width (no `maxWidth` cap except prose in About)

### Tablet (640–1060px)

- Sidebar hidden → sticky mobile top bar + hamburger drawer
- Padding reduced to `48px 40px`
- Grids collapse: 3-col → 2-col, 4-col → 3-col

### Mobile (< 640px)

- Same top bar, smaller padding `32px 20px`
- All grids → 1-col (homelab stays 2-col)
- Hero name wraps naturally

### Grid patterns

| Section     | Desktop                  | Tablet                | Mobile  |
| ----------- | ------------------------ | --------------------- | ------- |
| Stack       | 3-col                    | 2-col                 | 1-col   |
| Web3        | 2-col                    | 2-col                 | 1-col   |
| Homelab     | 4-col                    | 3-col                 | 2-col   |
| AI Workflow | 3-col                    | 2-col                 | 1-col   |
| About       | prose + sticky stat grid | prose + narrower grid | stacked |
| Experience  | 190px date + 1fr         | 190px date + 1fr      | stacked |

---

## Interactions

| Interaction       | Behaviour                                                  |
| ----------------- | ---------------------------------------------------------- |
| Sidebar scrollspy | Active section highlighted with accent dot + brighter text |
| Section fade-in   | Each section fades up on scroll via IntersectionObserver   |
| Card hover        | Slight lift + border brightens                             |
| Link hover        | Color transitions from `--text-2` → `--accent`             |
| Light mode toggle | Toast notification instead of actual mode switch           |

---

## Dos and Don'ts

**Do**

- Use `--font-display` for anything that needs to command attention
- Use `--font-mono` for numbers, dates, labels, technical metadata
- Keep icons at 65–75% opacity (they support, not dominate)
- Keep prose line lengths comfortable — use layout to fill width, not wider text columns
- Add subtle hover lift to interactive cards

**Don't**

- Add gradients to backgrounds
- Use warm colors (this is a cool-only palette)
- Mix serif typefaces into the system
- Add emoji (use SVG icons instead)
- Use `maxWidth` on section-level prose (About excepted — it uses a two-column layout instead)
- Use rounded pill cards with left-border accents
