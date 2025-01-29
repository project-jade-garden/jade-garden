import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createColorPicker = (opts: Prompts) =>
  templateWrapper(
    "color-picker",
    {
      markup: ""
    },
    opts
  );
