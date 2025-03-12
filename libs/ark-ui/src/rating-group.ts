// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/rating-group/rating-group.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export const slots = ["root", "label", "item", "control"] as const;

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
