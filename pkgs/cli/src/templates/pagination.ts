import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createPagination = (opts: Prompts) =>
  templateWrapper(
    "pagination",
    {
      markup: ""
    },
    opts
  );
