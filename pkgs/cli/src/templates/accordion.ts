import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createAccordion = (opts: Prompts) =>
  componentWrapper(
    "accordion",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
