import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createToggleGroup = (opts: Prompts) =>
  componentWrapper(
    "toggle-group",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
