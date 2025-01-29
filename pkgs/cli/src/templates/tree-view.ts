import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createTreeView = (opts: Prompts) =>
  templateWrapper(
    "tree-view",
    {
      markup: ""
    },
    opts
  );
