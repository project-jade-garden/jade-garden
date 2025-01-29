import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createCollapsible = (opts: Prompts) =>
  componentWrapper(
    "collapsible",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
