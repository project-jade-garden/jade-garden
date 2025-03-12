// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tooltip/tooltip.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export const slots = ["trigger", "arrow", "arrowTip", "positioner", "content"] as const;

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
