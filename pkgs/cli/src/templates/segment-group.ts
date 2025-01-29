import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createSegmentGroup = (opts: Prompts) =>
  templateWrapper(
    "segment-group",
    {
      markup: ""
    },
    opts
  );
