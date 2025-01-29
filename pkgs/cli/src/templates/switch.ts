import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSwitch = (opts: Prompts) =>
  componentWrapper(
    "switch",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
