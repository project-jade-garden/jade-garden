// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Popover/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/popover#anatomy)
 */
export const slots = ["root", "trigger", "portal", "content", "arrow", "close", "anchor"] as const;

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://reka-ui.com/docs/components/popover#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
  }
>;
