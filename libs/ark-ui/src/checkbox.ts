// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/checkbox/checkbox.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const slots = ["root", "control", "indicator", "label", "group"] as const;

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
