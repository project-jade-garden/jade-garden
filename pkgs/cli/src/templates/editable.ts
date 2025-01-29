import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createEditable = (opts: Prompts) =>
  templateWrapper(
    "editable",
    {
      markup: ""
    },
    opts
  );
