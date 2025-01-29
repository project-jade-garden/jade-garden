import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createColorPicker = (opts: Prompts) =>
  componentWrapper(
    "color-picker",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
