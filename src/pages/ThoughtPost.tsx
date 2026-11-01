import { Link, useParams } from "@/lib/router-compat";
import PortfolioLayout from "@/components/PortfolioLayout";
import { getThought, getRelatedThoughts } from "@/data/thoughts";
import NotFound from "./NotFound";

const ThoughtPost = () => {
  const { slug = "" } = useParams();
  const t = getThought(slug);
  if (!t) return <NotFound />;
  const related = getRelatedThoughts(t.slug);
  const paragraphs = t.body.split(/\n\s*\n/);

  return (
    <PortfolioLayout>
      <article className="wrap thoughts-page thought-article">
        <Link to="/thoughts" className="thought-back">← All thoughts</Link>
        <div className="thought-meta">
          <time dateTime={t.date}>{t.displayDate}</time>
          {t.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
        <h1 className="thoughts-h1">{t.title}</h1>
        <div className="thought-body">
          {paragraphs.map((p, i) => {
            const m = p.match(/^(\d+\.\s+[^\n]+)\n([\s\S]+)$/);
            if (m) {
              return (
                <section key={i}>
                  <h2 className="thought-h2">{m[1]}</h2>
                  <p>{m[2]}</p>
                </section>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
        {t.linkedinUrl && (
          <a className="btn btn-ghost" href={t.linkedinUrl} target="_blank" rel="noopener noreferrer">
            Originally on LinkedIn ↗
          </a>
        )}
        <nav className="thought-related" aria-labelledby="related-h">
          <h2 id="related-h" className="thought-h2">More thoughts</h2>
          {related.length > 0 && (
            <div className="thoughts-list">
              {related.map((r) => (
                <Link key={r.slug} to={`/thoughts/${r.slug}`} className="thought-card">
                  <div className="thought-meta">
                    <time dateTime={r.date}>{r.displayDate}</time>
                    {r.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                  <h3 className="thought-title">{r.title}</h3>
                  <p className="thought-summary">{r.summary}</p>
                </Link>
              ))}
            </div>
          )}
          <p className="thought-related-links">
            <Link to="/thoughts">Browse all thoughts →</Link>
            {" · "}
            <Link to="/">See the work behind these notes →</Link>
          </p>
        </nav>
      </article>
    </PortfolioLayout>
  );
};

export default ThoughtPost;
