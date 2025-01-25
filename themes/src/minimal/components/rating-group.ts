import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/rating-group";

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
export const ratingGroupSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", ratingGroupSlots);

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
export const ratingGroupStyledSlots = {
  base: "rating-group",
  root: "rating-group__root",
  label: "rating-group__label",
  item: "rating-group__item",
  control: "rating-group__control"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", ratingGroupStyledSlots);
