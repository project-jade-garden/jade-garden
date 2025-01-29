import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSwitch = (opts: Prompts) =>
  templateWrapper(
    "switch",
    {
      markup: ""
    },
    opts
  );
