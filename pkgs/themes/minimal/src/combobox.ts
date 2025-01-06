import { type ComboboxSlots, createComboboxSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @returns
 * ```js
 * {
 *   base: "combobox",
 *   root: "combobox__root",
 *   clearTrigger: "combobox__clear-trigger",
 *   content: "combobox__content",
 *   control: "combobox__control",
 *   input: "combobox__input",
 *   item: "combobox__item",
 *   itemGroup: "combobox__item-group",
 *   itemGroupLabel: "combobox__item-group-label",
 *   itemIndicator: "combobox__item-indicator",
 *   itemText: "combobox__item-text",
 *   label: "combobox__label",
 *   list: "combobox__list",
 *   positioner: "combobox__positioner",
 *   trigger: "combobox__trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const comboboxSlots = createComboboxSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("combobox", comboboxSlots));

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @example
 * ```css
 * .combobox { }
 *
 * .combobox__root { }
 *
 * .combobox__clear-trigger { }
 *
 * .combobox__content { }
 *
 * .combobox__control { }
 *
 * .combobox__input { }
 *
 * .combobox__item { }
 *
 * .combobox__item-group { }
 *
 * .combobox__item-group-label { }
 *
 * .combobox__item-indicator { }
 *
 * .combobox__item-text { }
 *
 * .combobox__label { }
 *
 * .combobox__list { }
 *
 * .combobox__positioner { }
 *
 * .combobox__trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const comboboxStyledSlots = {
  base: "combobox",
  root: "combobox__root",
  clearTrigger: "combobox__clear-trigger",
  content: "combobox__content",
  control: "combobox__control",
  input: "combobox__input",
  item: "combobox__item",
  itemGroup: "combobox__item-group",
  itemGroupLabel: "combobox__item-group-label",
  itemIndicator: "combobox__item-indicator",
  itemText: "combobox__item-text",
  label: "combobox__label",
  list: "combobox__list",
  positioner: "combobox__positioner",
  trigger: "combobox__trigger"
} as const satisfies Record<ComboboxSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("combobox", comboboxStyledSlots));
