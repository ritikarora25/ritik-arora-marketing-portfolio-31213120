import { useState } from "react";

/** Crawlable #anchor for a glossary term; clicking copies the full deep link. */
export function TermCopyLink({ slug, term }: { slug: string; term: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <a
      href={`#${slug}`}
      className="term-copy-link"
      aria-label={`Copy link to ${term}`}
      title={copied ? "Link copied" : "Copy link to this term"}
      onClick={(e) => {
        e.preventDefault();
        const url = `${window.location.origin}${window.location.pathname}#${slug}`;
        window.history.replaceState(null, "", `#${slug}`);
        navigator.clipboard?.writeText(url).then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        }).catch(() => {});
      }}
    >
      {copied ? "Copied!" : "#"}
    </a>
  );
}
