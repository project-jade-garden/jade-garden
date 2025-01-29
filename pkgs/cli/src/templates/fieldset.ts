import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createFieldset = (opts: Prompts) =>
  templateWrapper(
    "fieldset",
    {
      markup: ""
    },
    opts
  );
