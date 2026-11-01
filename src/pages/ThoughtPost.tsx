import { Link, useParams } from "@/lib/router-compat";
import PortfolioLayout from "@/components/PortfolioLayout";
import { getThought } from "@/data/thoughts";
import NotFound from "./NotFound";

const ThoughtPost = () => {
  const { slug = "" } = useParams();
  const t = getThought(slug);
  if (!t) return <NotFound />;
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
      </article>
    </PortfolioLayout>
  );
};

export default ThoughtPost;
