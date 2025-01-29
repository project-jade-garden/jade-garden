import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createToggleGroup = (opts: Prompts) =>
  templateWrapper(
    "toggle-group",
    {
      markup: ""
    },
    opts
  );
