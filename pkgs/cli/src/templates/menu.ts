import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createMenu = (opts: Prompts) =>
  componentWrapper(
    "menu",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
