import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSignaturePad = (opts: Prompts) =>
  templateWrapper(
    "signature-pad",
    {
      markup: ""
    },
    opts
  );
