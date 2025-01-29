import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createProgress = (opts: Prompts) =>
  componentWrapper(
    "progress",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
