# Image assets

Everything here is derived from the raw Figma exports in `/images` at the repo
root. Replacing a file keeps the layout intact as long as the aspect ratio
stays the same — no code changes needed.

| File | Source export | Size | Notes |
| --- | --- | --- | --- |
| `hero-decor.png` | `Full Hero.png` | 1746 × 1474 (2x) | Gold frame and chevron pattern, transparent. Shared by both themes. |
| `hero-statue-dark.png` | `statue-skull-…wallpaper 1.png` | 1713 × 1402 (2x) | Dark statue cut-out, transparent. |
| `hero-light.png` | `FULL.png` | 797 × 749 (1x) | Light composite. Its flat white backdrop is flood-filled to transparent so the page's ambient glow stays visible behind it. |
| `logo-mark-dark.png` | `Logo.png`, left 82px | 82 × 89 (2x) | Medallion only; the wordmark is live text. |
| `logo-mark-light.png` | `Logo.png`, left 82px | 82 × 89 (2x) | Same mark with the white linework re-inked; the gold ring is untouched. |
| `work-1…3.jpg` | `Corsoul.png` | 900 × 675 (2x) | Sliced at x 64, 1122, 2180 (900px wide, 168px apart). The baked caption strip is painted over because the caption is drawn in code. |
| `banner-statue-dark.jpg` | `image 1.png` | 1785 × 868 (2x) | Fades into the panel through a mask in `banner.tsx`. |
| `banner-statue-light.jpg` | `image 1-3.png` | 1756 × 868 (2x) | |
| `banner-avatars.png` | `image 1-2.png` | 873 × 428 (1x) | Transparent, so one file serves both themes. |

## Hero placement

The hero plates are positioned by their coordinates on the 1728px artboard,
not by eye:

- stage (dark): x 742 → 1617.2, y 130 → 867
- decor inside it: x 745.2, full height
- statue inside it: x 748.4 → 1604.6, y 166 → 867
- stage (light): x 822.4 → 1617, y 118 → 867

If you re-export a plate, keep its bounding box identical or the offsets in
`src/components/sections/hero.tsx` need updating alongside it.

## Adding more work cards

Append entries to `works` in `src/lib/content.ts` and drop the images here —
the carousel picks them up automatically.
