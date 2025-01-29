import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createClipboard = (opts: Prompts) =>
  componentWrapper(
    "clipboard",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
