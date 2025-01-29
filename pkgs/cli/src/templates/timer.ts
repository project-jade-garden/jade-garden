import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createTimer = (opts: Prompts) =>
  templateWrapper(
    "timer",
    {
      markup: ""
    },
    opts
  );
