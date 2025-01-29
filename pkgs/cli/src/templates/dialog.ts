import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createDialog = (opts: Prompts) =>
  templateWrapper(
    "dialog",
    {
      markup: ""
    },
    opts
  );
