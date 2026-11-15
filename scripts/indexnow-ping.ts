// Run after publishing: bun scripts/indexnow-ping.ts
import { indexNowPayload } from "../src/lib/indexnow";
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(indexNowPayload()),
});
console.log("IndexNow", res.status, await res.text());
