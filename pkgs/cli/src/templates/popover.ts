import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createPopover = (opts: Prompts) =>
  componentWrapper(
    "popover",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
