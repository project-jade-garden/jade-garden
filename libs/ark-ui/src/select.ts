// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/select/select.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export const slots = [
  "root",
  "label",
  "item",
  "indicator",
  "itemText",
  "content",
  "trigger",
  "positioner",
  "valueText",
  "control",
  "list",
  "clearTrigger",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
