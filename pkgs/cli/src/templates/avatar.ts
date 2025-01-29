import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createAvatar = (opts: Prompts) =>
  templateWrapper(
    "avatar",
    {
      markup: ""
    },
    opts
  );
