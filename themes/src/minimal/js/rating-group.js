import { createSlots } from "@spark-css/core/rating-group";
/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 *
 * @returns
 * ```js
 * {
 *   base: "rating-group",
 *   root: "rating-group__root",
 *   label: "rating-group__label",
 *   item: "rating-group__item",
 *   control: "rating-group__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/rating-group").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: slots.root,
    label: slots.label,
    item: slots.item,
    control: slots.control
};
/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 *
 * @example
 * ```css
 * .rating-group { }
 *
 * .rating-group__root { }
 *
 * .rating-group__label { }
 *
 * .rating-group__item { }
 *
 * .rating-group__control { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export const ratingGroup = styledSlots;
