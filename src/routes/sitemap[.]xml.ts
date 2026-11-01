import { createFileRoute } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";
import { sitemapXml } from "../../scripts/sitemap-xml";

// Page-specific lastmod values carried over from the former static sitemap.
const KNOWN_LASTMOD =
  "<url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/crm-vs-product-problem</loc><lastmod>2026-10-07</lastmod></url>";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(sitemapXml(thoughts.map((t) => t.slug), KNOWN_LASTMOD), {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
