import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createCombobox = (opts: Prompts) =>
  componentWrapper(
    "combobox",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
