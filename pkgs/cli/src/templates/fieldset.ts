import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createFieldset = (opts: Prompts) =>
  componentWrapper(
    "fieldset",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
