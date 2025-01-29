import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createClipboard = (opts: Prompts) =>
  templateWrapper(
    "clipboard",
    {
      markup: ""
    },
    opts
  );
