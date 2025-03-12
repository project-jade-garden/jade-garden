// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Collapsible/index.ts
import type { ClassValue } from "tailwind-variants";

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
 * @see [source](https://reka-ui.com/docs/components/collapsible#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
