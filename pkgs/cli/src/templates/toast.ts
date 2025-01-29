import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createToast = (opts: Prompts) =>
  templateWrapper(
    "toast",
    {
      markup: ""
    },
    opts
  );
