// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Collapsible/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://reka-ui.com/docs/components/collapsible#anatomy)
 */
export const slots = ["root", "trigger", "content"] as const;

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://reka-ui.com/docs/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://reka-ui.com/docs/components/collapsible#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "open" | "closed";
      disabled: "";
    };
    trigger: {
      state: "open" | "closed";
      disabled: "";
    };
    content: {
      state: "open" | "closed";
      disabled: "";
    };
  }
>;
