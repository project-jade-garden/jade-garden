// * https://github.com/radix-ui/primitives/blob/main/packages/react/tooltip/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#anatomy)
 */
export const slots = ["arrow", "content", "provider", "root", "trigger"] as const;

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "closed" | "delayed-open" | "instant-open";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    trigger: {
      state: "closed" | "delayed-open" | "instant-open";
    };
  }
>;
