import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSteps = (opts: Prompts) =>
  templateWrapper(
    "steps",
    {
      markup: ""
    },
    opts
  );
