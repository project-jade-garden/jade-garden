import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createDatePicker = (opts: Prompts) =>
  componentWrapper(
    "date-picker",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
