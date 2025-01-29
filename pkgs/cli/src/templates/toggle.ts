import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createToggle = (opts: Prompts) =>
  templateWrapper(
    "toggle",
    {
      markup: ""
    },
    opts
  );
