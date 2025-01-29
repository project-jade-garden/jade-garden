import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createTreeView = (opts: Prompts) =>
  componentWrapper(
    "tree-view",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
