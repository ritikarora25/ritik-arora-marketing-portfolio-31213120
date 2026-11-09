import type { Thought } from "@/data/thoughts";
import { profileJsonLd } from "@/lib/profile-jsonld";
import { SITE, SHARE_IMAGE } from "@/lib/seo";

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: "Ritik Arora — Growth & Marketing",
  inLanguage: "en",
  publisher: { "@id": `${SITE}/#person` },
};

const person = profileJsonLd.mainEntity;
const blogId = `${SITE}/thoughts#blog`;

function breadcrumbs(items: { name: string; url: string }[], id: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function thoughtsJsonLd(posts: Thought[]) {
  const url = `${SITE}/thoughts`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      websiteJsonLd,
      {
        "@type": "Blog",
        "@id": blogId,
        url,
        name: "Thoughts on CRM & Retention — Ritik Arora",
        author: { "@id": person["@id"] },
        isPartOf: { "@id": websiteJsonLd["@id"] },
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Thoughts on CRM & Retention — Ritik Arora",
        inLanguage: "en",
        isPartOf: { "@id": blogId },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE}/thoughts/${post.slug}`,
            name: post.title,
          })),
        },
      },
      breadcrumbs([{ name: "Home", url: `${SITE}/` }, { name: "Thoughts", url }], `${url}#breadcrumbs`),
    ],
  };
}

export function articleJsonLd(post: Thought) {
  const url = `${SITE}/thoughts/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      websiteJsonLd,
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        url,
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        keywords: post.tags.join(", "),
        inLanguage: "en",
        author: { "@id": person["@id"] },
        publisher: { "@id": person["@id"] },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        image: SHARE_IMAGE,
        isPartOf: { "@type": "Blog", "@id": blogId, url: `${SITE}/thoughts`, name: "Thoughts on CRM & Retention" },
        ...(post.sources?.length ? { citation: post.sources.map((source) => ({
          "@type": "CreativeWork",
          name: source.label,
          url: new URL(source.url, `${SITE}/`).href,
        })) } : {}),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: post.title,
        isPartOf: { "@id": websiteJsonLd["@id"] },
        mainEntity: { "@id": `${url}#article` },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
      },
      breadcrumbs([
        { name: "Home", url: `${SITE}/` },
        { name: "Thoughts", url: `${SITE}/thoughts` },
        { name: post.title, url },
      ], `${url}#breadcrumbs`),
    ],
  };
}