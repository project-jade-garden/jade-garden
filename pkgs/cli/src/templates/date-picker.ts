import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createDatePicker = (opts: Prompts) =>
  templateWrapper(
    "date-picker",
    {
      markup: ""
    },
    opts
  );
