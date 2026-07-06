import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Return Ritik Arora's professional profile summary, current role, and links (LinkedIn, Bayt).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Ritik Arora",
      role: "Product Marketing Associate at APNAKLUB",
      location: "India",
      links: {
        linkedin: "https://www.linkedin.com/in/ritik-arora-b8b30419b/",
        bayt: "https://people.bayt.com/ritikarora25",
        portfolio: "https://ritik-arora-marketing-portfolio.lovable.app",
      },
      focus: [
        "Product marketing",
        "Growth and go-to-market",
        "B2B commerce and retail-tech",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
