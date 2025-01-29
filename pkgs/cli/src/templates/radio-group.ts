import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createRadioGroup = (opts: Prompts) =>
  templateWrapper(
    "radio-group",
    {
      markup: ""
    },
    opts
  );
