import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createNumberInput = (opts: Prompts) =>
  templateWrapper(
    "number-input",
    {
      markup: ""
    },
    opts
  );
