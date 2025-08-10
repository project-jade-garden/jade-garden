// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Tooltip/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://reka-ui.com/docs/components/tooltip#anatomy)
 */
export const slots = ["root", "trigger", "content", "arrow", "portal", "provider"] as const;

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://reka-ui.com/docs/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://reka-ui.com/docs/components/tooltip#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "closed" | "delayed-open" | "instant-open";
    };
    content: {
      state: "closed" | "delayed-open" | "instant-open";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
  }
>;
