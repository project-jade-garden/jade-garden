// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/clipboard/clipboard.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard
 * @see [source](https://ark-ui.com/docs/components/clipboard#anatomy)
 */
export const slots = ["root", "control", "trigger", "indicator", "input", "label"] as const;

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard
 * @see [source](https://ark-ui.com/docs/components/clipboard#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard
 * @see [source](https://ark-ui.com/docs/components/clipboard#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "clipboard";
      part: "root";
      copied: "";
    };
    control: {
      scope: "clipboard";
      part: "control";
      copied: "";
    };
    trigger: {
      scope: "clipboard";
      part: "trigger";
      copied: "";
    };
    input: {
      scope: "clipboard";
      part: "input";
      copied: "";
      readonly: "";
    };
    label: {
      scope: "clipboard";
      part: "label";
      copied: "";
    };
  }
>;
