// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const slots = ["root", "label", "item", "indicator", "itemText", "itemControl"] as const;

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
