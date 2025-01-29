import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createToggle = (opts: Prompts) =>
  componentWrapper(
    "toggle",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
