// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/splitter/splitter.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections
 * @see [source](https://ark-ui.com/docs/components/splitter#anatomy)
 */
export const slots = ["root", "panel", "resizeTrigger"] as const;

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections
 * @see [source](https://ark-ui.com/docs/components/splitter#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections
 * @see [source](https://ark-ui.com/docs/components/splitter#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "splitter";
      part: "root";
      orientation: "horizontal" | "vertical";
    };
    panel: {
      scope: "splitter";
      part: "panel";
      orientation: "horizontal" | "vertical";
      id: "";
      index: "number";
    };
    resizeTrigger: {
      scope: "splitter";
      part: "resize-trigger";
      id: "";
      orientation: "horizontal" | "vertical";
      focus: "";
      disabled: "";
    };
  }
>;
