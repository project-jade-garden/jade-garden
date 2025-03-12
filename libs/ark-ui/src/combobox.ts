// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/combobox/combobox.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const slots = [
  "content",
  "trigger",
  "positioner",
  "control",
  "root",
  "input",
  "label",
  "item",
  "itemIndicator",
  "itemGroup",
  "list",
  "clearTrigger",
  "itemGroupLabel",
  "itemText"
] as const;

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
