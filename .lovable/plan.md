
## Goal

UI migration only. Recreate the HTML prototype's look and behavior by **updating the existing components in place**. Use tokens from `new.txt`. Keep Poppins for all text. No new architecture, providers, contexts, or abstractions unless the prototype cannot be built without them.

## Component reuse map (existing → prototype section)

| Existing file | Becomes | Change |
| --- | --- | --- |
| `PortfolioLayout.tsx` | Page shell + top bar | Replace old header with sticky top-bar; keep as the wrapper |
| `PortfolioHero.tsx` | Hero (funnel nav + H1 + proof line + persona chips + meta + photo) | Rewrite JSX/styles; keep file |
| `PortfolioAbout.tsx` | About (3 paragraphs, char-scroll on para 2) | Rewrite content + animations |
| `PortfolioExperience.tsx` | Journey wrapper (intro, note, vertical line + fill) | Replace grid with vertical connected flow; render 5 stage cards |
| `experience/ApnaKlubCard.tsx` | Retain stage card | Update copy/metrics/sparkline; add node + eyebrow + bar |
| `experience/Cars24Card.tsx` | Engage stage card | Same |
| `experience/KiranaBazaarCard.tsx` | Monetize stage card | Same |
| `experience/StupaSportCard.tsx` | Acquire stage card | Same |
| `PortfolioAchievements.tsx` | Metrics strip (5-col ink card) | Rewrite content |
| `PortfolioSkills.tsx` | Toolkit (chip groups) | Rewrite content |
| `PortfolioEducation.tsx` | Education / Certifications / Recognition (3-col grid) | Rewrite content |
| `PortfolioContact.tsx` | Contact ink card | Rewrite content, keep LinkedIn fix |
| `BackToTopButton.tsx` | Back-to-top | Restyle to prototype (ink pill, 500px threshold) |
| `ResumeButton.tsx` | Resume pill in top bar | Keep Drive link, restyle |
| `src/pages/Index.tsx` | Section order + persona state | Reorder sections, add `useState` for persona, pass down as props |
| `src/data/companyLogos.ts` | Existing logo map | Reuse for Stupa/CARS24/ApnaKlub/Kirana |

## New files (only where nothing exists)

- `experience/FreoCard.tsx` — Activate stage. No corresponding company existed in the old codebase. Uses the same shape as the other four cards and renders an "F" monogram tile since the prototype has no Freo logo.
- `src/data/journey.ts` — plain module (not a hook, not a context) with the persona-swappable copy per stage (role/problem/ran/moved for default/recruiter/founder/marketer), banner text, "most relevant" stage map, sparkline paths, and bar `data-w` values. Every card imports what it needs.

That is the entire new surface. No context, no provider, no custom hooks.

## Persona state

Owned by `src/pages/Index.tsx` with a single `useState<'default'|'recruiter'|'founder'|'marketer'>`. Passed as props to `PortfolioHero` (chips + banner) and `PortfolioExperience` (which forwards to each stage card). An effect in `Index.tsx` writes `document.body.dataset.persona` so the recruiter CSS reorder works.

## Design tokens (from new.txt)

Edit `src/index.css` to:

- Add CSS variables: `--ink #151833`, `--paper #F5F4F0`, `--indigo #3D3FE0`, `--coral #FF6B4A`, `--slate #8A8D9F`, `--line #E4E2DB`, `--radius 10px`.
- Point shadcn tokens at these (background→paper, foreground→ink, primary→indigo, accent→coral, muted-foreground→slate, border→line) using the existing HSL bridge so shadcn primitives still work.
- Add `.wrap` (max-width 1120px, padding 0 28px), coral `::selection`, coral focus-visible outline.
- Remove the current white background + purple/pink corner gradient rules.

Edit `tailwind.config.ts` to expose `ink`, `paper`, `indigo`, `coral`, `slate`, `line` as color utilities alongside the existing shadcn HSL variables. Keep `primary`/`secondary` on `hsl(var(--primary))`.

Update memory: "Background styling" — now warm paper `#F5F4F0` with ink text and coral/indigo accents (no gradients).

## Typography — Poppins everywhere

- Keep existing Poppins loading in `index.html` and the asset JSONs.
- Do **not** add Space Grotesk / Inter / JetBrains Mono.
- Prototype rules that name those families fall back to Poppins.
- For mono-styled bits (metric numbers, eyebrows, funnel numbers, proof line), use letter-spacing + `font-variant-numeric: tabular-nums` to keep them visually distinct without a mono face.

## Section order in Index.tsx

TopBar (inside `PortfolioLayout`) → Hero → About → Journey (Experience) → Metrics strip (Achievements) → Toolkit (Skills) → Education → Contact → Footer → BackToTop.

## Interactions to preserve (all with plain React + IntersectionObserver + rAF, no libraries)

1. Funnel-nav sweep gradient on load; scroll-spy highlights active stage (`rootMargin: -38% 0 -50% 0`). Implemented in `PortfolioHero` (nav lives at the top of the hero).
2. H1 word-by-word fade-up, 75ms stagger, indigo italic `<em>` clause. Implemented in `PortfolioHero` with a small local effect.
3. Typewriter proof line starts ~1s after load; blinking coral cursor. Local effect in `PortfolioHero`.
4. Persona chips (aria-pressed toggle, banner reveal, reset). Recruiter reorders Journey via body `data-persona` CSS. Role/problem/ran/moved swap per persona from `src/data/journey.ts`. "Most relevant" tag lights on that persona's stage.
5. Vertical journey line fills as the flow scrolls (indigo→coral gradient). Implemented in `PortfolioExperience` with a scroll handler.
6. Each stage: card fade-in, node pop, bar fill, counter animation on ~22% intersection. Implemented inside each stage card with a local `useEffect` + `IntersectionObserver`.
7. About para 2 char-by-char scroll opacity. Implemented in `PortfolioAbout` with a local effect.
8. Back-to-top visible after 500px scroll. Update `BackToTopButton`.
9. `prefers-reduced-motion` fallback everywhere: final states visible, animations skipped. Checked inline with `window.matchMedia`.

## Head / SEO / analytics

`index.html` — update `<title>` to "Ritik Arora — Growth & Marketing" and matching meta description within SEO length limits. Keep GA4, Microsoft Clarity, JSON-LD Person schema, canonical URL, GSC verification, and Poppins preloads untouched. `Index.tsx` Helmet block stays.

## Assets

- Existing `/lovable-uploads/*` logos for Stupa, CARS24, ApnaKlub, 1K Kirana are reused.
- Existing hero headshot is reused (already `<picture>` optimized).
- Freo renders an "F" monogram tile (inline, no image).

## Out of scope

- No new npm dependencies.
- No new routes, backend, auth, or Cloud changes.
- No context/provider/custom-hook/helper additions.
- No copy changes beyond what the prototype specifies.

## Validation

- `bun run build` passes.
- Playwright smoke on `/`: H1 words render, funnel nav shows 5 items, all 5 stage cards render in prototype order, clicking each persona chip flips `aria-pressed` and updates the banner, recruiter persona visually reorders stages, `<details>` opens, back-to-top toggles after scroll, console clean.
