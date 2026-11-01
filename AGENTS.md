# Project rules

- Per-page title, description, canonical, Open Graph/Twitter tags and JSON-LD live in each route's `head()` under `src/routes/` (built with `pageMeta` in `src/lib/seo.ts`) — the site is server-rendered with TanStack Start so social crawlers see them; never reintroduce react-helmet or put per-page tags in components.
- Site-wide head (analytics, verification, fonts) lives in `src/routes/__root.tsx`; there is no index.html.
- Page UI stays in `src/pages/`; route files only wire head + loader + component, so layout logic isn't duplicated.
- Routing imports go through `src/lib/router-compat.tsx` (react-router-style API over TanStack Router) to keep call sites unchanged.
- Browser APIs (`window`, `document`) only inside effects/handlers — pages render on the server too.
- /sitemap.xml is served dynamically by `src/routes/sitemap[.]xml.ts` from Thoughts slugs (no static public/sitemap.xml, which would shadow it); never add build-time lastmod dates.
- Serve local Poppins as WOFF2, match responsive portrait preloads to image sources, and defer optional cursor/analytics code while keeping all article and portfolio content server-rendered.
- Thoughts may include optional public sources rendered beside the article; preserve research evidence under .lovable/research and distinguish reported portfolio outcomes from proposed frameworks and causal results.
