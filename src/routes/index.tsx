import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { SITE, pageMeta } from "@/lib/seo";
import { profileJsonLd } from "@/lib/profile-jsonld";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Ritik Arora — Growth & Marketing",
      ogTitle: "Ritik Arora | Growth, CRM & Lifecycle Marketing",
      description: "Growth marketer, 5+ years across brand, CRM, retention and product — most recently at Freo, Bengaluru.",
      path: "/",
      type: "profile",
    }),
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "preload", as: "image", type: "image/webp", href: "/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.webp", fetchPriority: "high" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(profileJsonLd) }],
  }),
  component: Index,
});
