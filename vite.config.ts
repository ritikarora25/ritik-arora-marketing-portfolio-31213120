// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync, writeFileSync } from "node:fs";
import { thoughts } from "./src/data/thoughts";
import { sitemapXml } from "./scripts/sitemap-xml";

export default defineConfig({
  vite: {
    plugins: [{
      name: "refresh-public-thoughts-sitemap",
      buildStart() {
        const file = new URL("./public/sitemap.xml", import.meta.url);
        const previous = readFileSync(file, "utf8");
        const next = sitemapXml(thoughts.map((thought) => thought.slug), previous);
        if (next !== previous) writeFileSync(file, next);
      },
    }],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
