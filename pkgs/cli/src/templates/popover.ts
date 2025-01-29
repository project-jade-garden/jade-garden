import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createPopover = (opts: Prompts) =>
  templateWrapper(
    "popover",
    {
      markup: ""
    },
    opts
  );
