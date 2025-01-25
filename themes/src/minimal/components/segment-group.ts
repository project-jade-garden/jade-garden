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
export const segmentGroupSlots = createSlots({});

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
export const segmentGroupStyledSlots = {
  base: "segment-group",
  root: "segment-group__root",
  label: "segment-group__label",
  item: "segment-group__item",
  itemText: "segment-group__item-text",
  itemControl: "segment-group__item-control",
  indicator: "segment-group__indicator"
} as const satisfies Record<Slots, string | string[]>;
