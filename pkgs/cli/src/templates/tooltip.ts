import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createTooltip = (opts: Prompts) =>
  componentWrapper(
    "tooltip",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
