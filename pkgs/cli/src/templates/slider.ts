import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSlider = (opts: Prompts) =>
  templateWrapper(
    "slider",
    {
      markup: ""
    },
    opts
  );
