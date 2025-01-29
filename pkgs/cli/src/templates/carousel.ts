import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createCarousel = (opts: Prompts) =>
  componentWrapper(
    "carousel",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
