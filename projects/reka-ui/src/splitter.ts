// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Splitter/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Splitter**
 * @description A component that divides your layout into resizable sections.
 * @see [source](https://reka-ui.com/docs/components/splitter#anatomy)
 */
export const slots = ["group", "panel", "resizeHandle"] as const;

/**
 * **Splitter**
 * @description A component that divides your layout into resizable sections.
 * @see [source](https://reka-ui.com/docs/components/splitter#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Splitter**
 * @description A component that divides your layout into resizable sections.
 * @see [source](https://reka-ui.com/docs/components/splitter#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    group: {
      orientation: "vertical" | "horizontal";
      state: "collapsed" | "expanded" | "";
    };
    resizeHandle: {
      state: "drag" | "hover" | "inactive";
      disabled: "";
      orientation: "vertical" | "horizontal";
    };
  }
>;
