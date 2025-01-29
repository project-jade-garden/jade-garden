import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createRadioGroup = (opts: Prompts) =>
  componentWrapper(
    "radio-group",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
