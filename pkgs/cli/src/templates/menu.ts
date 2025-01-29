import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createMenu = (opts: Prompts) =>
  templateWrapper(
    "menu",
    {
      markup: ""
    },
    opts
  );
