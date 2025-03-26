// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/select/select.anatomy.ts

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export const slots = [
  "label",
  "positioner",
  "trigger",
  "indicator",
  "clearTrigger",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "list",
  "content",
  "root",
  "control",
  "valueText"
] as const;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export type Slots = (typeof slots)[number];
