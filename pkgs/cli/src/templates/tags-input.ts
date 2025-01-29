import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createTagsInput = (opts: Prompts) =>
  templateWrapper(
    "tags-input",
    {
      markup: ""
    },
    opts
  );
