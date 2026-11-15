import { thoughts } from "@/data/thoughts";
import { SITE } from "@/lib/seo";

/** Public IndexNow key; must match public/<key>.txt. */
export const INDEXNOW_KEY = "590b4daae74f85c07c8c6edfcffc9594";

export const indexNowUrls = () => [
  `${SITE}/`,
  `${SITE}/thoughts`,
  ...thoughts.map((t) => `${SITE}/thoughts/${encodeURIComponent(t.slug)}`),
];

export const indexNowPayload = () => ({
  host: new URL(SITE).host,
  key: INDEXNOW_KEY,
  keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
  urlList: indexNowUrls(),
});
