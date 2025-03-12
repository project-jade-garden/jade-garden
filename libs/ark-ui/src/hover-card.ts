// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/hover-card/hover-card.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const slots = ["trigger", "content", "positioner", "arrow", "arrowTip"] as const;

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
