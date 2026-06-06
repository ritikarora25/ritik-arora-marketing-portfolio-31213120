# Optimize hero image delivery

## Goal
Reduce hero image payload without any visible change. Source is 800×800 JPEG (144 KB) but displayed at max 224×224 CSS px. Serve a properly sized WebP with a JPEG fallback.

## Steps

1. **Generate optimized assets** (via `nix run nixpkgs#libwebp` / Pillow):
   - `public/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.webp` — 448×448 (2x DPR), quality ~85
   - `public/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.jpg` — 448×448 JPEG fallback, quality ~85
   - Keep the original 800×800 JPEG file in place (still referenced by OG/Twitter/JSON-LD social tags where larger is fine).

2. **Update `src/components/PortfolioHero.tsx`**:
   - Replace the bare `<img>` with `<picture>` containing a WebP `<source>` and an `<img>` JPEG fallback.
   - Keep existing classes, alt text, `width={224}`, `height={224}`, `fetchPriority="high"`, `decoding="async"`.
   - No layout, sizing, or styling changes.

3. **Update `index.html` preload**:
   - Change `<link rel="preload" as="image" href="...b900e373...jpg">` to point at the new 448 WebP with `type="image/webp"` so the LCP image is preloaded in the format actually used.
   - Leave OG/Twitter image tags untouched (still reference the original JPEG; social scrapers prefer JPEG).

## Out of scope
No design, layout, dimensions, JSON-LD, sitemap, or SEO copy changes.

## Verification
Confirm new file sizes (<50 KB expected for 448 WebP), `bun run build` succeeds, hero renders identically in preview.
