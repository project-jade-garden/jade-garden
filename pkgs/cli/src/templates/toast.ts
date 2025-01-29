import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createToast = (opts: Prompts) =>
  componentWrapper(
    "toast",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
