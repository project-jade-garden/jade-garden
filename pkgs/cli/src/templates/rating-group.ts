import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createRatingGroup = (opts: Prompts) =>
  templateWrapper(
    "rating-group",
    {
      markup: ""
    },
    opts
  );
