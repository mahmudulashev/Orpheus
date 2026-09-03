# Image assets

Every file here is referenced from `src/lib/content.ts` (or directly from a
component). Replacing a file keeps the layout intact as long as the aspect
ratio stays the same — no code changes needed.

The bundled files were derived from the Figma page renders, so they are lower
resolution than the originals. Export the nodes below from Figma at **2x** and
overwrite the files to get full quality.

| File | Figma node | Aspect | Notes |
| --- | --- | --- | --- |
| `hero-art-dark.png` | `Home Full` → `Full Hero` | 856 × 754 | Composite plate: statue, gold frame, chevron pattern. Its backdrop must be near-black — the page blends it with `mix-blend-mode: screen`. |
| `hero-art-light.png` | `Home Full - Light` → `Full Hero` | 856 × 754 | Same plate on a near-white backdrop — blended with `multiply`. |
| `logo-mark.png` | `Nav` → `Logo` medallion | 1 : 1 | Rendered inside a 44px circle. |
| `work-1.jpg` … `work-3.jpg` | `Carousel` cards | 450 × 337.5 | Card artwork; the caption bar is drawn in code, so leave it out of the export. |
| `banner-statue-dark.jpg` / `-light.jpg` | `Banner` → `Mask group` | 881 × 434 | Fades into the panel through a horizontal mask. |
| `banner-avatars-dark.jpg` / `-light.jpg` | `Banner` (left-info) → `Mask group` | 881 × 434 | Same, mirrored. |

## Adding more work cards

Append entries to `works` in `src/lib/content.ts` and drop the images here —
the carousel picks them up automatically.
