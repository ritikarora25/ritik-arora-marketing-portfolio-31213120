import { createFileRoute } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";

const SITE = "https://ritik-arora-marketing-portfolio.lovable.app";

export function llmsFullText() {
  const parts = thoughts.map((t) => {
    const take = t.takeaways?.length ? `\nKey takeaways:\n${t.takeaways.map((k) => `- ${k}`).join("\n")}\n` : "";
    const src = t.sources?.length ? `\nSources:\n${t.sources.map((s) => `- ${s.label}: ${s.url}`).join("\n")}\n` : "";
    return `## ${t.title}\n\nURL: ${SITE}/thoughts/${t.slug}\nPublished: ${t.date}\nAuthor: Ritik Arora\n\n${t.summary}\n${take}\n${t.body}\n${src}`;
  });
  return `# Ritik Arora — Thoughts (full text)\n\n> Field notes by Ritik Arora, a Bengaluru-based growth and retention marketer (CRM, lifecycle, product marketing). Portfolio: ${SITE}/\n\n${parts.join("\n\n---\n\n")}\n`;
}

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: async () =>
        new Response(llmsFullText(), {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
