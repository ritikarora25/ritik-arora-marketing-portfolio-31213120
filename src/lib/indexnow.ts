import { thoughts } from "@/data/thoughts";
import { SITE } from "@/lib/seo";

/** Public IndexNow key; must match public/<key>.txt. */
export const INDEXNOW_KEY = "e9277873e0b84e3298a026ee5c06d21f";

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
