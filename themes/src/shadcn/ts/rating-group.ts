// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/rating-group.ts
import { type Slots, createSlots } from "@spark-css/core/rating-group";

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 *
 * @returns
 * ```js
 * {
 *   base: "parkRatingGroup",
 *   root: "parkRatingGroup__root",
 *   label: "parkRatingGroup__label",
 *   item: "parkRatingGroup__item",
 *   control: "parkRatingGroup__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/rating-group").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  label: [
    slots.label,

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  item: [
    slots.item,

    // Borders
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-none",

    // Interactivity
    "cursor-pointer",

    // SVG
    "fill-bg-emphasized",
    "data-[highlighted]:fill-[--colors-color-palette-default]",

    // Transitions & Animation
    "transition-[color,_fill]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  control: [
    slots.control,

    // Layout
    "flex"
  ]
} satisfies Record<Slots, string | string[]>;

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 *
 * @example
 * ```css
 * .parkRatingGroup { }
 *
 * .parkRatingGroup__root {
 *   (@)apply flex gap-1.5 flex-col;
 * }
 *
 * .parkRatingGroup__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkRatingGroup__item {
 *   (@)apply [&:is(:focus-visible,_[data-focus-visible])]:outline-none cursor-pointer fill-bg-emphasized data-[highlighted]:fill-[--colors-color-palette-default] transition-[color,_fill] duration-200 ease-[--easings-default];
 * }
 *
 * .parkRatingGroup__control {
 *   (@)apply flex;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/rating-group#anatomy)
 */
export const ratingGroup = styledSlots;
