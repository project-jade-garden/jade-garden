import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createPagination = (opts: Prompts) =>
  componentWrapper(
    "pagination",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
