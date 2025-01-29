import type { Prompts } from "../prompts.js";
import { templateWrapper } from "../utils.js";

export const createQrCode = (opts: Prompts) =>
  templateWrapper(
    "qr-code",
    {
      markup: ""
    },
    opts
  );
