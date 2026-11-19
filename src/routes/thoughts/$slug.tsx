import { createFileRoute, notFound } from "@tanstack/react-router";
import ThoughtPost from "@/pages/ThoughtPost";
import { getThought } from "@/data/thoughts";
import { SITE, pageMeta, articleShareImage } from "@/lib/seo";
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
        ...pageMeta({ title: t.seoTitle ?? `${t.title} — Ritik Arora`, ogTitle: t.ogTitle ?? t.title, ogDescription: t.ogDescription, description: t.seoDescription ?? t.summary, path: `/thoughts/${t.slug}`, type: "article", image: articleShareImage(t.slug), imageAlt: t.title }),
        { property: "article:published_time", content: t.date },
        { property: "article:author", content: "Ritik Arora" },
        ...t.tags.map((tag) => ({ property: "article:tag", content: tag })),
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", type: "image/webp", href: `/og/${t.slug}-1200.webp`, imageSrcSet: `/og/${t.slug}-640.webp 640w, /og/${t.slug}-1200.webp 1200w`, imageSizes: "(max-width: 760px) 100vw, 720px", fetchPriority: "high" },
      ],
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
