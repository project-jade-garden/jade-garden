import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createDialog = (opts: Prompts) =>
  componentWrapper(
    "dialog",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
