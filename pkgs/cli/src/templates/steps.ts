import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSteps = (opts: Prompts) =>
  componentWrapper(
    "steps",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
