import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PortfolioLayout from "@/components/PortfolioLayout";
import { getThought } from "@/data/thoughts";
import NotFound from "./NotFound";

const SITE = "https://ritik-arora-marketing-portfolio.lovable.app";

const ThoughtPost = () => {
  const { slug = "" } = useParams();
  const t = getThought(slug);
  if (!t) return <NotFound />;
  const paragraphs = t.body.split(/\n\s*\n/);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    datePublished: t.date,
    description: t.summary,
    author: { "@type": "Person", name: "Ritik Arora", url: SITE },
    mainEntityOfPage: `${SITE}/thoughts/${t.slug}`,
  };

  return (
    <PortfolioLayout>
      <Helmet>
        <title>{`${t.title} — Ritik Arora`}</title>
        <meta name="description" content={t.summary} />
        <link rel="canonical" href={`${SITE}/thoughts/${t.slug}`} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE}/thoughts/${t.slug}`} />
        <meta property="article:published_time" content={t.date} />
        <meta property="article:author" content="Ritik Arora" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.summary} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <article className="wrap thoughts-page thought-article">
        <Link to="/thoughts" className="thought-back">← All thoughts</Link>
        <div className="thought-meta">
          <time dateTime={t.date}>{t.displayDate}</time>
          {t.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
        <h1 className="thoughts-h1">{t.title}</h1>
        <div className="thought-body">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {t.linkedinUrl && (
          <a className="btn btn-ghost" href={t.linkedinUrl} target="_blank" rel="noopener noreferrer">
            Originally on LinkedIn ↗
          </a>
        )}
      </article>
    </PortfolioLayout>
  );
};

export default ThoughtPost;
