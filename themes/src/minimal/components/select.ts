import { type Slots, createSlots } from "@spark-css/core/select";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 *
 * @returns
 * ```js
 * {
 *   base: "select",
 *   label: "select__label",
 *   positioner: "select__positioner",
 *   trigger: "select__trigger",
 *   indicator: "select__indicator",
 *   clearTrigger: "select__clear-trigger",
 *   item: "select__item",
 *   itemText: "select__item-text",
 *   itemIndicator: "select__item-indicator",
 *   itemGroup: "select__item-group",
 *   itemGroupLabel: "select__item-group-label",
 *   list: "select__list",
 *   content: "select__content",
 *   root: "select__root",
 *   control: "select__control",
 *   valueText: "select__value-text"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "select",
  label: "select__label",
  positioner: "select__positioner",
  trigger: "select__trigger",
  indicator: "select__indicator",
  clearTrigger: "select__clear-trigger",
  item: "select__item",
  itemText: "select__item-text",
  itemIndicator: "select__item-indicator",
  itemGroup: "select__item-group",
  itemGroupLabel: "select__item-group-label",
  list: "select__list",
  content: "select__content",
  root: "select__root",
  control: "select__control",
  valueText: "select__value-text"
} satisfies Record<Slots, string | string[]>;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 *
 * @example
 * ```css
 * .select { }
 *
 * .select__label { }
 *
 * .select__positioner { }
 *
 * .select__trigger { }
 *
 * .select__indicator { }
 *
 * .select__clear-trigger { }
 *
 * .select__item { }
 *
 * .select__item-text { }
 *
 * .select__item-indicator { }
 *
 * .select__item-group { }
 *
 * .select__item-group-label { }
 *
 * .select__list { }
 *
 * .select__content { }
 *
 * .select__root { }
 *
 * .select__control { }
 *
 * .select__value-text { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export const select = styledSlots;
