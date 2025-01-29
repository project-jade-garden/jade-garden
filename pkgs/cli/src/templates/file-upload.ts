import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createFileUpload = (opts: Prompts) =>
  componentWrapper(
    "file-upload",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
