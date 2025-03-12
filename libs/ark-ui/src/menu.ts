// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/menu/menu.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const slots = [
  "trigger",
  "content",
  "positioner",
  "arrow",
  "arrowTip",
  "item",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "itemText",
  "indicator",
  "separator",
  "contextTrigger",
  "triggerItem"
] as const;

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
