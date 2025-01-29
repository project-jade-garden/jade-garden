import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createTimer = (opts: Prompts) =>
  componentWrapper(
    "timer",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
