import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createTooltip = (opts: Prompts) =>
  templateWrapper(
    "tooltip",
    {
      markup: ""
    },
    opts
  );
