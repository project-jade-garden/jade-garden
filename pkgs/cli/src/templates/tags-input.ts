import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createTagsInput = (opts: Prompts) =>
  componentWrapper(
    "tags-input",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
