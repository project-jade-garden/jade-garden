import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createNumberInput = (opts: Prompts) =>
  componentWrapper(
    "number-input",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
