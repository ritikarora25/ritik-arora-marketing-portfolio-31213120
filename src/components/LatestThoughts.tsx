import { Link } from "@/lib/router-compat";
import { thoughts } from "@/data/thoughts";

const LatestThoughts = () => {
  const latest = [...thoughts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  if (!latest.length) return null;
  return (
    <section className="wrap" id="writing" aria-labelledby="writing-h" style={{ padding: "40px 28px" }}>
      <div className="section-head">
        <h2 id="writing-h">Latest writing</h2>
        <Link to="/thoughts" className="section-tag">All thoughts →</Link>
      </div>
      <div className="thoughts-list">
        {latest.map((t) => (
          <Link key={t.slug} to={`/thoughts/${t.slug}`} className="thought-card">
            <div className="thought-meta">
              <span>{t.displayDate}</span>
              {t.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>
            <h3 className="thought-title">{t.title}</h3>
            <p className="thought-summary">{t.summary}</p>
            <span className="thought-cta">Read full post →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestThoughts;
