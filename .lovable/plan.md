
## Overview

Apply technical SEO and Google entity optimizations to `index.html` only. No component, style, or layout changes. The request is well-scoped and safe — every change is in the document head.

## Notes on the spec

A few small adjustments worth flagging before implementing:

- **Canonical**: `src/pages/Index.tsx` already injects `<link rel="canonical">` via react-helmet-async. Adding a second one in `index.html` ships two canonicals (invalid SEO). Per our head-meta guidance, canonical should live in exactly one place. I'll add it to `index.html` as requested AND remove the duplicate from `Index.tsx` so only one ships.
- **`sameAs` links**: I'll include all five URLs you provided as-is. If any of them 404, Google ignores them silently — no harm, but worth confirming they all resolve. Want me to verify them before adding?
- **Twitter tags**: `index.html` currently has only `twitter:card`. I'll add `twitter:title`, `twitter:description`, and `twitter:image` using the existing hero headshot (`/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg`).
- **`og:image`**: not currently set. I'll add it pointing at the same headshot so social previews work. (You listed it under "verify existing" — it doesn't exist yet, so I'll add it.)
- **Profile image in schema**: I'll use the absolute URL `https://ritik-arora-marketing-portfolio.lovable.app/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg`.
- **`Index.tsx` Helmet `og:*` overrides**: currently sets a different `og:title` and `og:description` than `index.html`. I'll align them to the new copy so JS-executing crawlers and static crawlers see the same thing.

## Changes

### 1. `index.html` — head updates
- Update `<title>` → `Ritik Arora | Growth Marketing, CRM & Customer Lifecycle Management`
- Update `<meta name="description">` → new 4+ years copy
- Add `<link rel="canonical" href="https://ritik-arora-marketing-portfolio.lovable.app/" />`
- Update `og:title`, `og:description` to match new copy
- Add `og:image` (absolute URL to headshot)
- Add `twitter:title`, `twitter:description`, `twitter:image`
- Replace existing Person JSON-LD with the upgraded ProfilePage + Person schema (with `@id`, `givenName`, `familyName`, expanded `sameAs`, `knowsAbout`, absolute `image` URL)
- Keep existing `google-site-verification`, preconnect, preload, Poppins font link untouched

### 2. `src/pages/Index.tsx` — dedupe
- Remove `<link rel="canonical">` from the Helmet block (now owned by `index.html`)
- Align Helmet `og:title` / `og:description` strings to the new copy so they don't conflict

### 3. Verification (no file changes)
- Confirm `public/robots.txt` and `public/sitemap.xml` are unchanged and still valid
- Confirm no other component renders Person/ProfilePage JSON-LD

## Out of scope (per your requirements)
No analytics, tracking, chat widgets, SEO plugins, visual badges, or third-party libraries. No component, style, layout, or content changes.

## One question before I build

The `sameAs` array includes `github.com/ritikarora25`, `peerlist.io/ritikarora25`, `theorg.com/...`, and `medium.com/@ritikarora25`. Should I include all five verbatim, or do you want me to verify they resolve first? Invalid `sameAs` URLs don't break anything but weaken entity signals.
