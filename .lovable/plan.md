
## Goal

Explain why the production bundle size didn't shrink after the dependency cleanup, and quantify the actual disk-space reduction in `node_modules`.

## Approach

1. **Reconstruct the "before" state**
   - Check git for the pre-cleanup `package.json` and `bun.lockb` to identify the 31 removed packages.
   - Temporarily install those packages into a scratch directory (outside the project) so the current lockfile isn't disturbed.

2. **Measure `node_modules` delta**
   - Record current `du -sh node_modules` and package count (`ls node_modules | wc -l`).
   - In the scratch install, record the same numbers with the removed packages restored.
   - Report the difference in MB and package count (transitive deps included).

3. **Compare production bundles**
   - Current build is already known: `index.js` 354.52 kB / 111.22 kB gzip, `index.css` 32.15 kB.
   - Rebuild once with the removed packages temporarily re-added *and actually imported nowhere* to confirm Vite/Rollup tree-shakes them out (expected: identical bundle).
   - Inspect the current `dist/` chunk list vs. the previously reported chunk list to confirm no chunk names or sizes changed.
   - Use `vite build --mode production` with `--sourcemap` + `rollup-plugin-visualizer` (dev-only, in a throwaway config) to list what actually ended up in the bundle and confirm none of the removed packages were ever there.

4. **Explain the result**
   - Vite uses Rollup with ESM tree-shaking; a package listed in `package.json` but never `import`ed contributes 0 bytes to the bundle. That is why removing 31 unused packages left `index.js` byte-identical.
   - The wins from the cleanup are: smaller `node_modules` on disk, faster `bun install`, fewer transitive deps to audit/patch, and a cleaner dependency surface — not runtime bundle size.

## Deliverable

A short report with:
- Before/after `node_modules` size (MB) and package count.
- Before/after `dist/` chunk list confirming no bundle change.
- One-paragraph explanation of tree-shaking as the reason.
- List of the 31 removed packages grouped by "direct" vs "transitive freed".

## Notes

- No source files will be modified. All experiments happen in `/tmp/dep-audit/` scratch dirs and are cleaned up after.
- No changes to `package.json`, `bun.lockb`, or `vite.config.ts`.
