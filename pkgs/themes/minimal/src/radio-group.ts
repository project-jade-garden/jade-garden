import { type RadioGroupSlots, createRadioGroupSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 *
 * @returns
 * ```js
 * {
 *   base: "radio-group",
 *   root: "radio-group__root",
 *   label: "radio-group__label",
 *   item: "radio-group__item",
 *   itemText: "radio-group__item-text",
 *   itemControl: "radio-group__item-control",
 *   indicator: "radio-group__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const radioGroupSlots = createRadioGroupSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("radio-group", radioGroupSlots));

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 *
 * @example
 * ```css
 * .radio-group { }
 *
 * .radio-group__root { }
 *
 * .radio-group__label { }
 *
 * .radio-group__item { }
 *
 * .radio-group__item-text { }
 *
 * .radio-group__item-control { }
 *
 * .radio-group__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const radioGroupStyledSlots = {
  base: "radio-group",
  root: "radio-group__root",
  label: "radio-group__label",
  item: "radio-group__item",
  itemText: "radio-group__item-text",
  itemControl: "radio-group__item-control",
  indicator: "radio-group__indicator"
} as const satisfies Record<RadioGroupSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("radio-group", radioGroupStyledSlots));
