// * https://github.com/radix-ui/primitives/blob/main/packages/react/collapsible/src/index.ts
import type { ClassValue } from "tailwind-variants";

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
 * @see [source](https://www.radix-ui.com/primitives/docs/components/collapsible#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
