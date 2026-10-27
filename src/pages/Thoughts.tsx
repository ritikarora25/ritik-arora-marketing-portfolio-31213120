import { Link } from "@/lib/router-compat";
import PortfolioLayout from "@/components/PortfolioLayout";
import { thoughts } from "@/data/thoughts";

const Thoughts = () => (
  <PortfolioLayout>
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
