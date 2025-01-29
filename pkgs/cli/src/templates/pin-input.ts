import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createPinInput = (opts: Prompts) =>
  templateWrapper(
    "pin-input",
    {
      markup: ""
    },
    opts
  );
