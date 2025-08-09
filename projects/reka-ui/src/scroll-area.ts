// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/ScrollArea/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://reka-ui.com/docs/components/scroll-area#anatomy)
 */
export const slots = ["root", "viewport", "scrollbar", "thumb", "corner"] as const;

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://reka-ui.com/docs/components/scroll-area#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Scroll Area**
 * @description Augments native scroll functionality for custom, cross-browser styling.
 * @see [source](https://reka-ui.com/docs/components/scroll-area#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    scrollbar: {
      state: "visible" | "hidden";
      orientation: "vertical" | "horizontal";
    };
    thumb: {
      state: "visible" | "hidden";
    };
  }
>;
