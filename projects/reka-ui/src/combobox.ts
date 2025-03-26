// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Combobox/index.ts

/**
 * **Combobox**
 * @description Choose from a list of suggested values with full keyboard support.
 * @see [source](https://reka-ui.com/docs/components/combobox#anatomy)
 */
export const slots = [
  "root",
  "input",
  "anchor",
  "empty",
  "trigger",
  "cancel",
  "group",
  "label",
  "content",
  "viewport",
  "virtualizer",
  "item",
  "itemIndicator",
  "separator",
  "arrow",
  "portal"
] as const;

/**
 * **Combobox**
 * @description Choose from a list of suggested values with full keyboard support.
 * @see [source](https://reka-ui.com/docs/components/combobox#anatomy)
 */
export type Slots = (typeof slots)[number];
