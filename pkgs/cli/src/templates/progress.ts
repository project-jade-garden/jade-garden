import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createProgress = (opts: Prompts) =>
  templateWrapper(
    "progress",
    {
      markup: ""
    },
    opts
  );
