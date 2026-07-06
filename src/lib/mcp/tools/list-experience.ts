import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const EXPERIENCE = [
  {
    company: "APNAKLUB",
    role: "Product Marketing Associate",
    focus: "B2B retail commerce growth and GTM",
  },
  {
    company: "Cars24",
    role: "Marketing",
    focus: "Used-car marketplace growth initiatives",
  },
  {
    company: "Kirana Bazaar",
    role: "Marketing",
    focus: "Neighborhood retail and category growth",
  },
  {
    company: "Stupa Sports Analytics",
    role: "Marketing",
    focus: "Sports analytics product marketing",
  },
];

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description:
    "List Ritik Arora's professional experience with company, role, and focus areas.",
  inputSchema: {
    company: z
      .string()
      .optional()
      .describe("Optional company name filter (case-insensitive substring)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ company }) => {
    const items = company
      ? EXPERIENCE.filter((e) =>
          e.company.toLowerCase().includes(company.toLowerCase()),
        )
      : EXPERIENCE;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
