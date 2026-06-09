## Objective
Optimize background SEO metadata in `index.html` and heading structure in `PortfolioHero.tsx` to target keywords "Ritik Arora", "Marketing", and "Marketing Portfolio", with absolutely zero visual UI changes.

## Changes

### 1. index.html — Title & Meta Description
- Update `<title>` to exactly: `Ritik Arora | Marketing Portfolio`
- Update `<meta name="description">` to exactly: `Explore the professional Marketing Portfolio of Ritik Arora, specializing in growth, retention marketing, and lifecycle strategies.`
- No other index.html changes (OG tags, JSON-LD, GA4, fonts, preloads remain untouched).

### 2. PortfolioHero.tsx — Semantic H1 Structure
- The current `<h1>` reads: `Ritik Arora — Growth Marketer & CRM Specialist`
- Restructure so that only the text `Ritik Arora` lives inside the `<h1>` tag.
- Move ` — Growth Marketer & CRM Specialist` into a sibling `<span>` (or `<p>`) element that carries the **exact same Tailwind classes** (`text-4xl md:text-5xl font-bold tracking-wide mb-2 leading-tight text-[#2b2e83]`).
- This keeps visual size, color, placement, and appearance pixel-identical to the current state, while giving crawlers a clean, keyword-focused `<h1>`.

### 3. Verification
- After edits, preview the site to confirm the hero heading looks completely unchanged.
- Once verified, publish the update to make it live.

## Zero UI Impact Guarantee
All changes are strictly inside `<head>` tags or semantic HTML wrappers with identical CSS classes. No colors, spacing, fonts, layout, or animations will be modified.