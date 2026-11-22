import { createFileRoute } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";
import { sitemapXml } from "../../scripts/sitemap-xml";

// Page-specific lastmod values: dates of the last real content change per page.
const KNOWN_LASTMOD =
  "<url><loc>https://ritik-arora-marketing-portfolio.lovable.app/</loc><lastmod>2026-11-16</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts</loc><lastmod>2026-11-20</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/marketing-glossary</loc><lastmod>2026-11-18</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/retention-rate-formula</loc><lastmod>2026-11-16</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/crm-vs-product-problem</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/lifecycle-marketing-strategy</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/best-crm-for-2027</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/customer-reactivation-before-win-back-campaign</loc><lastmod>2026-11-14</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/how-to-choose-freelance-growth-marketer</loc><lastmod>2026-11-20</lastmod></url><url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/what-does-a-product-marketer-do</loc></url>";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(
          sitemapXml(
            thoughts.map((t) => t.slug),
            KNOWN_LASTMOD,
            Object.fromEntries(
              thoughts.flatMap((t) => (t.updated ? [[t.slug, t.updated] as const] : [])),
            ),
          ),
          {
            headers: {
              "Content-Type": "application/xml; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          },
        ),
    },
  },
});
