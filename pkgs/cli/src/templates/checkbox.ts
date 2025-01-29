import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createCheckbox = (opts: Prompts) =>
  componentWrapper(
    "checkbox",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
