import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createCarousel = (opts: Prompts) =>
  templateWrapper(
    "carousel",
    {
      markup: ""
    },
    opts
  );
