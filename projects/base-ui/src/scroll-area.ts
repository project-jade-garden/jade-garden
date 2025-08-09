// * https://github.com/mui/base-ui/blob/master/packages/react/src/scroll-area/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Scroll Area**
 * @description A native scroll container with custom scrollbars.
 * @see [source](https://base-ui.com/react/components/scroll-area#api-reference)
 */
export const slots = ["content", "corner", "root", "scrollbar", "thumb", "viewport"] as const;

/**
 * **Scroll Area**
 * @description A native scroll container with custom scrollbars.
 * @see [source](https://base-ui.com/react/components/scroll-area#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Scroll Area**
 * @description A native scroll container with custom scrollbars.
 * @see [source](https://base-ui.com/react/components/scroll-area#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    scrollbar: {
      orientation: "horizontal" | "vertical";
      hovering: "";
      scrolling: "";
    };
    thumb: {
      orientation: "horizontal" | "vertical";
    };
  }
>;
