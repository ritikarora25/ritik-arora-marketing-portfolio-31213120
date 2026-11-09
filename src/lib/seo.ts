export const SITE = "https://ritik-arora-marketing-portfolio.lovable.app";
export const SHARE_IMAGE = `${SITE}/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg`;

/** Absolute URL of an article's 1200x630 share card in public/og/. */
export const articleShareImage = (slug: string) => `${SITE}/og/${slug}.jpg`;

/** Builds the full set of title, description, Open Graph and Twitter tags for a page. */
export const pageMeta = (o: {
  title: string;
  description: string;
  path: string;
  type?: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  imageAlt?: string;
}) => {
  const ogTitle = o.ogTitle ?? o.title;
  const ogDescription = o.ogDescription ?? o.description;
  const image = o.image ?? SHARE_IMAGE;
  const wide = Boolean(o.image);
  return [
    { title: o.title },
    { name: "description", content: o.description },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:type", content: o.type ?? "website" },
    { property: "og:url", content: `${SITE}${o.path}` },
    { property: "og:image", content: image },
    ...(wide
      ? [
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { property: "og:image:alt", content: o.imageAlt ?? ogTitle },
        ]
      : []),
    { property: "og:site_name", content: "Ritik Arora" },
    { name: "twitter:card", content: wide ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: image },
  ];
};
