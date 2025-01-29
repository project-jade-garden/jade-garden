import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSignaturePad = (opts: Prompts) =>
  componentWrapper(
    "signature-pad",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
