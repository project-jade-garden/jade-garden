import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSelect = (opts: Prompts) =>
  templateWrapper(
    "select",
    {
      markup: ""
    },
    opts
  );
