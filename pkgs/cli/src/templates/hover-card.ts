import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createHoverCard = (opts: Prompts) =>
  componentWrapper(
    "hover-card",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
