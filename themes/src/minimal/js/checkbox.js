import { createSlots } from "@spark-css/core/checkbox";
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
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/checkbox").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  control: slots.control,
  indicator: slots.indicator,
  group: slots.group
};
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
export const checkboxStyles = styledSlots;
