import { type RatingGroupSlots, createRatingGroupSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const ratingGroupSlots = createRatingGroupSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("rating-group", ratingGroupSlots));

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
} as const satisfies Record<RatingGroupSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("rating-group", ratingGroupStyledSlots));
