export const SITE = "https://ritik-arora-marketing-portfolio.lovable.app";
export const SHARE_IMAGE = `${SITE}/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg`;

/** Builds the full set of title, description, Open Graph and Twitter tags for a page. */
export const pageMeta = (o: { title: string; description: string; path: string; type?: string; ogTitle?: string }) => [
  { title: o.title },
  { name: "description", content: o.description },
  { property: "og:title", content: o.ogTitle ?? o.title },
  { property: "og:description", content: o.description },
  { property: "og:type", content: o.type ?? "website" },
  { property: "og:url", content: `${SITE}${o.path}` },
  { property: "og:image", content: SHARE_IMAGE },
  { property: "og:site_name", content: "Ritik Arora" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: o.ogTitle ?? o.title },
  { name: "twitter:description", content: o.description },
  { name: "twitter:image", content: SHARE_IMAGE },
];
