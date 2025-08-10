// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toast/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://reka-ui.com/docs/components/toast#anatomy)
 */
export const slots = ["provider", "root", "portal", "action", "close", "viewport", "title", "description"] as const;

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://reka-ui.com/docs/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://reka-ui.com/docs/components/toast#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "open" | "closed";
      swipe: "start" | "move" | "cancel" | "end";
      "swipe-direction": "up" | "down" | "left" | "right";
    };
  }
>;
