import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSelect = (opts: Prompts) =>
  componentWrapper(
    "select",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
