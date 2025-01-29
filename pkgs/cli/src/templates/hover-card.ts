import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createHoverCard = (opts: Prompts) =>
  templateWrapper(
    "hover-card",
    {
      markup: ""
    },
    opts
  );
