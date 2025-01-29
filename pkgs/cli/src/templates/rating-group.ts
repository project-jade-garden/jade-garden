import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createRatingGroup = (opts: Prompts) =>
  componentWrapper(
    "rating-group",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
