import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createEditable = (opts: Prompts) =>
  componentWrapper(
    "editable",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
