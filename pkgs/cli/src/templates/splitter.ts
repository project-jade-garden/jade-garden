import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSplitter = (opts: Prompts) =>
  componentWrapper(
    "splitter",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
