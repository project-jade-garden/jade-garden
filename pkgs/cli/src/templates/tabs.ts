import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createTabs = (opts: Prompts) =>
  componentWrapper(
    "tabs",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
