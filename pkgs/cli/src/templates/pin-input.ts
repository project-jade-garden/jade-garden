import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createPinInput = (opts: Prompts) =>
  componentWrapper(
    "pin-input",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
