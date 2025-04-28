// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/listbox/listbox.anatomy.ts

/**
 * **Listbox**
 * @description A component for selecting a single or multiple items from a list.
 * @see [source](https://ark-ui.com/docs/components/listbox#anatomy)
 */
export const slots = [
  "root",
  "input",
  "label",
  "item",
  "itemText",
  "itemIndicator",
  "valueText",
  "itemGroup",
  "content",
  "itemGroupLabel"
] as const;

/**
 * **Listbox**
 * @description A component for selecting a single or multiple items from a list.
 * @see [source](https://ark-ui.com/docs/components/listbox#anatomy)
 */
export type Slots = (typeof slots)[number];
