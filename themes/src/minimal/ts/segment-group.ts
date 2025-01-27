import { type Slots, createSlots } from "@spark-css/core/segment-group";

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 *
 * @returns
 * ```js
 * {
 *   base: "segment-group",
 *   root: "segment-group__root",
 *   label: "segment-group__label",
 *   item: "segment-group__item",
 *   itemText: "segment-group__item-text",
 *   itemControl: "segment-group__item-control",
 *   indicator: "segment-group__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/segment-group").Slots } Slots
 * @type { Record<Slots, string | string[]> }
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
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 *
 * @example
 * ```css
 * .segment-group { }
 *
 * .segment-group__root { }
 *
 * .segment-group__label { }
 *
 * .segment-group__item { }
 *
 * .segment-group__item-text { }
 *
 * .segment-group__item-control { }
 *
 * .segment-group__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const segmentGroupStyles = styledSlots;
