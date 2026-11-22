import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { HOME_SEO_DESCRIPTION, HOME_SEO_TITLE, SITE, pageMeta } from "@/lib/seo";
import { profileJsonLd } from "@/lib/profile-jsonld";
import { websiteJsonLd } from "@/lib/content-jsonld";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: HOME_SEO_TITLE,
      ogTitle: "Ritik Arora | Growth, CRM & Lifecycle Marketing",
      description: HOME_SEO_DESCRIPTION,
      path: "/",
      type: "website",
    }),
    links: [
      { rel: "canonical", href: `${SITE}/` },
      {
        rel: "preload",
        as: "image",
        type: "image/webp",
        href: "/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.webp",
        imageSrcSet:
          "/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-224.webp 224w, /lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.webp 448w",
        imageSizes: "(max-width: 800px) 110px, 220px",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [profileJsonLd, websiteJsonLd],
        }),
      },
    ],
  }),
  component: Index,
});
