// * https://github.com/radix-ui/primitives/blob/main/packages/react/popover/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/popover#anatomy)
 */
export const slots = ["anchor", "arrow", "close", "content", "root", "trigger"] as const;

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Popover**
 * @description Displays rich content in a portal, triggered by a button.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/popover#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    trigger: {
      state: "open" | "closed";
    };
  }
>;
