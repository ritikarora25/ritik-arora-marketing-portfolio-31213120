import { useState } from "react";
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
      <article className={`wrap thoughts-page thought-article${t.slug === "customer-reactivation-before-win-back-campaign" ? " thought-article-guide" : ""}`}>
        <Link to="/thoughts" className="thought-back">← All thoughts</Link>
        <div className="thought-meta">
          <time dateTime={t.date}>{t.displayDate}</time>
          {t.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
        <h1 className="thoughts-h1">{t.title}</h1>
        <img
          className="thought-cover"
          src={`/og/${t.slug}.jpg`}
          alt={t.title}
          width={1200}
          height={630}
          fetchPriority="high"
        />
        <ShareButtons slug={t.slug} title={t.ogTitle ?? t.title} />
        <div className="thought-body">
          {paragraphs.map((p, i) => {
            if (p.startsWith("> ")) return <blockquote key={i}>{renderInline(p.slice(2))}</blockquote>;
            if (p.startsWith("- ")) return <ul key={i} className="thought-checklist">{p.split("\n").map((line, j) => <li key={j}>{renderInline(line.replace(/^- /, ""))}</li>)}</ul>;
            if (p.startsWith("### ")) return <h3 key={i} className="thought-h3">{renderInline(p.slice(4))}</h3>;
            if (p.startsWith("## ")) return <h2 key={i} className="thought-h2">{renderInline(p.slice(3))}</h2>;
            const m = p.match(/^(\d+\.\s+[^\n]+)\n([\s\S]+)$/);
            if (m) {
              return (
                <section key={i}>
                  <h2 className="thought-h2">{m[1]}</h2>
                  <p>{renderInline(m[2] ?? "")}</p>
                </section>
              );
            }
            return <p key={i}>{renderInline(p)}</p>;
          })}
        </div>
        {t.sources && t.sources.length > 0 && (
          <section className="thought-body" aria-labelledby="sources-h">
            <h2 id="sources-h" className="thought-h2">Sources and evidence</h2>
            <ul>
              {t.sources.map((source) => (
                <li key={source.url}>
                  {source.url.startsWith("/") ? (
                    <Link to={source.url}>{source.label}</Link>
                  ) : (
                    <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
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
                  <h2 className="thought-title">{r.title}</h2>
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

function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = `https://ritik-arora-marketing-portfolio.lovable.app/thoughts/${slug}`;
  const u = encodeURIComponent(url);
  const tx = encodeURIComponent(title);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      if (navigator.share) { await navigator.share({ title, url }); return; }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* cancelled */ }
  };
  return (
    <div className="thought-share" aria-label="Share this article">
      <span className="thought-share-label">Share</span>
      <a className="chip" href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className="chip" href={`https://x.com/intent/tweet?url=${u}&text=${tx}`} target="_blank" rel="noopener noreferrer">X</a>
      <a className="chip" href={`https://wa.me/?text=${tx}%20${u}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <button type="button" className="chip" onClick={copy}>{copied ? "Link copied" : "Copy link"}</button>
    </div>
  );
}

/** Turns [label](https://url) into outbound links; everything else stays plain text. */
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const m = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    return m ? <a key={i} href={m[2]} target="_blank" rel="noopener">{m[1]}</a> : part;
  });
}
