import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createCollapsible = (opts: Prompts) =>
  templateWrapper(
    "collapsible",
    {
      markup: ""
    },
    opts
  );
