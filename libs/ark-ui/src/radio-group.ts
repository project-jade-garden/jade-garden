// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/radio-group/radio-group.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const slots = ["root", "indicator", "label", "item", "itemText", "itemControl"] as const;

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
