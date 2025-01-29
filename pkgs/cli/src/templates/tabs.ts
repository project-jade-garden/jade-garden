import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createTabs = (opts: Prompts) =>
  templateWrapper(
    "tabs",
    {
      markup: ""
    },
    opts
  );
