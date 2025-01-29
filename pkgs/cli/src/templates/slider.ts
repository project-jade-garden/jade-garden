import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSlider = (opts: Prompts) =>
  componentWrapper(
    "slider",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
