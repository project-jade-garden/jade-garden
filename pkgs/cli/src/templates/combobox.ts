import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createCombobox = (opts: Prompts) =>
  templateWrapper(
    "combobox",
    {
      markup: ""
    },
    opts
  );
