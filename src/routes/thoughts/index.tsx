import { createFileRoute } from "@tanstack/react-router";
import Thoughts from "@/pages/Thoughts";
import { SITE, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/thoughts/")({
  head: () => ({
    meta: pageMeta({
      title: "Thoughts on CRM & Retention — Ritik Arora",
      description: "Field notes by Ritik Arora on CRM, lifecycle, retention and product marketing.",
      path: "/thoughts",
    }),
    links: [{ rel: "canonical", href: `${SITE}/thoughts` }],
  }),
  component: Thoughts,
});
