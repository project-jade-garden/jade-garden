import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createSegmentGroup = (opts: Prompts) =>
  componentWrapper(
    "segment-group",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
