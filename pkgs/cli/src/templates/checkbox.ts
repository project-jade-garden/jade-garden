import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createCheckbox = (opts: Prompts) =>
  templateWrapper(
    "checkbox",
    {
      markup: ""
    },
    opts
  );
