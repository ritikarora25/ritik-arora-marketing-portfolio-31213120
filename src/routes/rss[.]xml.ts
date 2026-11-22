import { createFileRoute } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";
import { rssXml } from "../../scripts/rss-xml";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(rssXml(thoughts), {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
