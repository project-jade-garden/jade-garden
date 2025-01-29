import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSplitter = (opts: Prompts) =>
  templateWrapper(
    "splitter",
    {
      markup: ""
    },
    opts
  );
