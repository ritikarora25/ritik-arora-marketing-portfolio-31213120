import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";

export default defineMcp({
  name: "ritik-arora-portfolio-mcp",
  title: "Ritik Arora Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for querying Ritik Arora's portfolio: get_profile returns bio and links; list_experience returns work history (optional company filter).",
  tools: [getProfileTool, listExperienceTool],
});
