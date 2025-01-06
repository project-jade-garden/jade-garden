import { type CheckboxSlots, createCheckboxSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @returns
 * ```js
 * {
 *   base: "checkbox",
 *   root: "checkbox__root",
 *   label: "checkbox__label",
 *   control: "checkbox__control",
 *   indicator: "checkbox__indicator",
 *   group: "checkbox__group"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const checkboxSlots = createCheckboxSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("checkbox", checkboxSlots));

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @example
 * ```css
 * .checkbox { }
 *
 * .checkbox__root { }
 *
 * .checkbox__label { }
 *
 * .checkbox__control { }
 *
 * .checkbox__indicator { }
 *
 * .checkbox__group { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const checkboxStyledSlots = {
  base: "checkbox",
  root: "checkbox__root",
  label: "checkbox__label",
  control: "checkbox__control",
  indicator: "checkbox__indicator",
  group: "checkbox__group"
} as const satisfies Record<CheckboxSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("checkbox", checkboxStyledSlots));
