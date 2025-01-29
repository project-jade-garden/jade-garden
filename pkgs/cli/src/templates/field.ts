import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createField = (opts: Prompts) =>
  componentWrapper(
    "field",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
