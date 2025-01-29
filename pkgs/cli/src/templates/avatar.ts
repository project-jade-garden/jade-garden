import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createAvatar = (opts: Prompts) =>
  componentWrapper(
    "avatar",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
