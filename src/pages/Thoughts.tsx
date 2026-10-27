import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PortfolioLayout from "@/components/PortfolioLayout";
import { thoughts } from "@/data/thoughts";

const SITE = "https://ritik-arora-marketing-portfolio.lovable.app";

const Thoughts = () => (
  <PortfolioLayout>
    <Helmet>
      <title>Thoughts on CRM & Retention — Ritik Arora</title>
      <meta name="description" content="Field notes by Ritik Arora on CRM, lifecycle, retention and product marketing." />
      <link rel="canonical" href={`${SITE}/thoughts`} />
      <meta property="og:title" content="Thoughts on CRM & Retention — Ritik Arora" />
      <meta property="og:description" content="Field notes by Ritik Arora on CRM, lifecycle, retention and product marketing." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE}/thoughts`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Thoughts on CRM & Retention — Ritik Arora" />
      <meta name="twitter:description" content="Field notes by Ritik Arora on CRM, lifecycle, retention and product marketing." />
    </Helmet>
    <section className="wrap thoughts-page">
      <p className="thoughts-eyebrow">Thoughts</p>
      <h1 className="thoughts-h1">Field notes on CRM, retention & growth</h1>
      <p className="thoughts-lead">Things I've learned running lifecycle programmes, first shared on LinkedIn.</p>
      <div className="thoughts-list">
        {thoughts.map((t) => (
          <Link key={t.slug} to={`/thoughts/${t.slug}`} className="thought-card">
            <div className="thought-meta">
              <time dateTime={t.date}>{t.displayDate}</time>
              {t.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>
            <h2 className="thought-title">{t.title}</h2>
            <p className="thought-summary">{t.summary}</p>
            <span className="thought-cta">Read full post →</span>
          </Link>
        ))}
      </div>
    </section>
  </PortfolioLayout>
);

export default Thoughts;
