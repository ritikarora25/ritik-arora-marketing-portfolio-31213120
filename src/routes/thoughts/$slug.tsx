import { createFileRoute, notFound } from "@tanstack/react-router";
import ThoughtPost from "@/pages/ThoughtPost";
import { getThought } from "@/data/thoughts";
import { SITE, pageMeta } from "@/lib/seo";
import { articleJsonLd } from "@/lib/content-jsonld";

export const Route = createFileRoute("/thoughts/$slug")({
  loader: ({ params }) => {
    const thought = getThought(params.slug);
    if (!thought) throw notFound();
    return { thought };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.thought;
    if (!t) return { meta: [{ title: "Not found — Ritik Arora" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/thoughts/${t.slug}`;
    return {
      meta: [
        ...pageMeta({ title: `${t.title} — Ritik Arora`, ogTitle: t.title, description: t.summary, path: `/thoughts/${t.slug}`, type: "article" }),
        { property: "article:published_time", content: t.date },
        { property: "article:author", content: "Ritik Arora" },
        ...t.tags.map((tag) => ({ property: "article:tag", content: tag })),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleJsonLd(t)),
        },
      ],
    };
  },
  component: ThoughtPost,
});
