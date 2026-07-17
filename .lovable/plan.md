## Goal
Verify the recent dependency cleanup did not regress the app. No code changes unless a regression is found.

## Steps

1. **Build**
   - Run `bun run build`.
   - Confirm exit code 0 and capture final bundle sizes for comparison against the previous 354.52 kB JS.

2. **Production preview**
   - Start `bun run preview` (Vite preview server) in the background.
   - Poll the port until it responds, then use it as the base URL for the checks below.

3. **Route walk via Playwright (headless Chromium)**
   - Routes to visit:
     - `/` (Index — hero, about, experience, skills, achievements, education, contact)
     - `/some-unknown-path` (NotFound catch-all)
   - For `/`, also exercise in-page anchors (`#about`, `#experience`, `#skills`, `#achievements`, `#education`, `#contact`) and the mobile menu toggle.
   - Trigger the Resume button (Google Drive link) and the LinkedIn footer link — verify the resolved `href` values, do not follow off-site.
   - Screenshot each route to `/tmp/browser/verify/` and view them to confirm layout matches expectations.

4. **Console errors**
   - Attach `page.on("console")` and `page.on("pageerror")` listeners during the walk.
   - Fail the check on any `error`-level console message or uncaught exception. Warnings logged but not failing.

5. **Network failures**
   - Attach `page.on("response")` and `page.on("requestfailed")`.
   - Flag any non-2xx/3xx response for same-origin assets (JS, CSS, fonts, images, `sitemap.xml`, `robots.txt`, `llms.txt`).
   - Third-party endpoints (GA4 `googletagmanager.com`, Clarity `clarity.ms`) are informational only — network blocking in the sandbox can produce false negatives.

6. **Lighthouse comparison**
   - The sandbox does not have a stored pre-cleanup Lighthouse baseline, and Lighthouse-in-sandbox scores are noisy vs. real Chrome. Two options:
     - **a. Sandbox run (rough):** `bunx lighthouse http://localhost:<port> --preset=desktop --output=json --output-path=/tmp/browser/verify/lh.json --chrome-flags="--headless=new --no-sandbox"` and report Performance / Accessibility / Best Practices / SEO. Compare against the published site scores if the user has them.
     - **b. User-run (authoritative):** ask the user to run Lighthouse in their browser against the published URL after they click Update, and share the four scores so we can compare.
   - Default to (a) and surface the numbers; recommend (b) as the source of truth.

7. **Report**
   - Build status + bundle size delta.
   - Per-route: screenshot, console errors, failed requests.
   - Lighthouse scores (with the caveat above).
   - If any regression appears, list it with a proposed fix — do not fix in this pass unless you approve.

## Notes
- Read-only verification pass. No source files change unless step 7 surfaces a regression and you approve a follow-up.
- All artifacts land under `/tmp/browser/verify/` so the project tree stays clean.
