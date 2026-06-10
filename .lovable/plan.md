## Goal
Eliminate the render-blocking Google Fonts request (~66 ms + extra round-trip to fonts.gstatic.com) by self-hosting Poppins WOFF2 files. No UI changes.

## Steps

1. **Download Poppins WOFF2 files** (weights 400, 600, 700, latin subset only) from the Google Fonts CDN into a temp dir.

2. **Upload via lovable-assets CLI** to get CDN-hosted URLs:
   - `poppins-400.woff2`
   - `poppins-600.woff2`
   - `poppins-700.woff2`
   Write the three `.asset.json` pointers under `src/assets/fonts/`.

3. **Add `@font-face` declarations** at the top of `src/index.css`, each referencing the CDN URL from the asset pointer, with `font-display: swap` and `unicode-range` for latin to match Google's behavior.

4. **Update `index.html`**:
   - Remove the `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...Poppins...">` tag.
   - Remove the two `<link rel="preconnect">` tags for `fonts.googleapis.com` and `fonts.gstatic.com` (no longer needed).
   - Add `<link rel="preload" as="font" type="font/woff2" href="<cdn-url-for-poppins-400>" crossorigin>` for the most critical weight (400) to prioritize LCP text.

5. **Verify**:
   - Visual: hero/body text still renders in Poppins, identical to current.
   - Network: no requests to `fonts.googleapis.com` or `fonts.gstatic.com`.
   - Build succeeds.

## Technical notes
- Tailwind config (`fontFamily.sans: ['Poppins', 'sans-serif']`) stays unchanged — `@font-face` registers the family name globally.
- Only latin subset is shipped (site is English-only) → smaller payload than Google's multi-subset CSS.
- `font-display: swap` preserves the current behavior where text appears immediately and swaps when the font loads, so no FOIT/layout shift regression.
- Files affected: `index.html`, `src/index.css`, new `src/assets/fonts/*.asset.json` pointers.
