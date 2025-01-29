import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createField = (opts: Prompts) =>
  templateWrapper(
    "field",
    {
      markup: ""
    },
    opts
  );
