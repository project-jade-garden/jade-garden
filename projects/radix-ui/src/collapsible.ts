// * https://github.com/radix-ui/primitives/blob/main/packages/react/collapsible/src/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/collapsible#anatomy)
 */
export const slots = ["content", "root", "trigger"] as const;

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a panel.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/collapsible#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      state: "open" | "closed";
      disabled: "";
    };
    root: {
      state: "open" | "closed";
      disabled: "";
    };
    trigger: {
      state: "open" | "closed";
      disabled: "";
    };
  }
>;
