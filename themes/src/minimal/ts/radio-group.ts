import { type Slots, createSlots } from "@spark-css/core/radio-group";

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
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/radio-group").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  item: slots.item,
  itemText: slots.itemText,
  itemControl: slots.itemControl,
  indicator: slots.indicator
} satisfies Record<Slots, string | string[]>;

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
export const radioGroup = styledSlots;
