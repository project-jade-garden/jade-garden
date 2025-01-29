import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createFileUpload = (opts: Prompts) =>
  templateWrapper(
    "file-upload",
    {
      markup: ""
    },
    opts
  );
