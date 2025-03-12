// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/hover-card/hover-card.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const slots = ["arrow", "arrowTip", "trigger", "positioner", "content"] as const;

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
