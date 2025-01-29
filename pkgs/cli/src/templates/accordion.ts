import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createAccordion = (opts: Prompts) =>
  templateWrapper(
    "accordion",
    {
      markup: ""
    },
    opts
  );
