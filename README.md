# Orpheus — Designer Portfolio

A pixel-faithful build of the *Orpheus — Designer Portfolio (Sculpture Avatars
& Community)* Figma file, in both its dark and light themes.

Layout, type sizes, letter-spacing and colour were measured off the 1728px
artboard and its exported renders, so the desktop view lines up with the design
one-to-one and scales down cleanly from there.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 — CSS-first `@theme`, no config file |
| Animation | Motion (`motion/react`) |
| Carousel | Embla Carousel |
| Theming | `next-themes`, class strategy |
| Icons | `lucide-react` (UI) + `react-icons` (brands) |
| Fonts | Cormorant Garamond + Poppins via `next/font` |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build
```

## Project layout

```
src/
  app/
    globals.css        design tokens, theme variables, shared utilities
    layout.tsx         fonts, metadata, theme provider
    page.tsx           section composition
  components/
    decor/             ambient background glows
    layout/            navbar, logo, theme toggle, mobile drawer
    sections/          hero, works, contribution, connect
    ui/                buttons, section title, work card, banner, reveal
  lib/
    content.ts         all copy and asset references
```

## Design tokens

`src/app/globals.css` holds the whole system. `:root` carries the light theme
and `.dark` overrides it, so every colour resolves through one variable:

- `--gold-100 … --gold-600` — the metallic ramp sampled from the Figma
  gradients, used by `text-gold-gradient` and `bg-gold-gradient`
- `--bg`, `--fg`, `--fg-muted`, `--panel`, `--panel-alt`, `--hairline`
- `--glow-left`, `--glow-right` — the ambient ellipses behind the header
- `--art-blend` — how the hero artwork keys into the page (`screen` in dark,
  `multiply` in light)
- `--gutter`, `--gutter-nav`, `--page-max` — the artboard's own spacing

## Editing content

Copy, navigation, work cards, banners and social links all live in
`src/lib/content.ts`. Images live in `public/images` — see the
[asset notes](public/images/README.md) for the export sizes.

## Accessibility

Semantic landmarks throughout, visible focus rings on the gold accent, an
Escape-and-backdrop-dismissable mobile drawer with scroll lock, and every
entrance animation disabled under `prefers-reduced-motion`.
