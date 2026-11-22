import { createFileRoute } from "@tanstack/react-router";
import Thoughts from "@/pages/Thoughts";
import { SITE, THOUGHTS_SEO_DESCRIPTION, THOUGHTS_SEO_TITLE, pageMeta } from "@/lib/seo";
import { thoughts } from "@/data/thoughts";
import { thoughtsJsonLd } from "@/lib/content-jsonld";

export const Route = createFileRoute("/thoughts/")({
  head: () => ({
    meta: pageMeta({
      title: THOUGHTS_SEO_TITLE,
      description: THOUGHTS_SEO_DESCRIPTION,
      path: "/thoughts",
    }),
    links: [{ rel: "canonical", href: `${SITE}/thoughts` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(thoughtsJsonLd(thoughts)) }],
  }),
  component: Thoughts,
});
