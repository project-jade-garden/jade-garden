import type { Prompts } from "../prompts.js";
import { componentWrapper } from "../utils.js";

export const createQrCode = (opts: Prompts) =>
  componentWrapper(
    "qr-code",
    {
      js: {
        script: ""
      },
      markup: "",
      props: ""
    },
    opts
  );
