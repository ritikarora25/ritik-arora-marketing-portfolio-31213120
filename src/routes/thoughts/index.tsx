import { createFileRoute } from "@tanstack/react-router";
import Thoughts from "@/pages/Thoughts";
import { SITE, pageMeta } from "@/lib/seo";
import { thoughts } from "@/data/thoughts";
import { thoughtsJsonLd } from "@/lib/content-jsonld";

export const Route = createFileRoute("/thoughts/")({
  head: () => ({
    meta: pageMeta({
      title: "Thoughts on CRM & Retention — Ritik Arora",
      description: "Field notes by Ritik Arora on CRM, lifecycle, retention and product marketing.",
      path: "/thoughts",
    }),
    links: [{ rel: "canonical", href: `${SITE}/thoughts` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(thoughtsJsonLd(thoughts)) }],
  }),
  component: Thoughts,
});
