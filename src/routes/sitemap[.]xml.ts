import { createFileRoute } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";
import { sitemapXml } from "../../scripts/sitemap-xml";

// Page-specific lastmod values carried over from the former static sitemap.
const KNOWN_LASTMOD =
  "<url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/crm-vs-product-problem</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/lifecycle-marketing-strategy</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/best-crm-for-2027</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/customer-reactivation-before-win-back-campaign</loc><lastmod>2026-11-14</lastmod></url>";

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
