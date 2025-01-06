// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/carousel.ts
import { type CarouselSlots, createCarouselSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @returns
 * ```js
 * {
 *   base: "parkCarousel",
 *   root: "parkCarousel__root",
 *   viewport: "parkCarousel__viewport",
 *   itemGroup: "parkCarousel__itemGroup",
 *   item: "parkCarousel__item",
 *   nextTrigger: "parkCarousel__nextTrigger",
 *   prevTrigger: "parkCarousel__prevTrigger",
 *   indicatorGroup: "parkCarousel__indicatorGroup",
 *   indicator: "parkCarousel__indicator",
 *   control: "parkCarousel__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselSlots = createCarouselSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("carousel", carouselSlots));

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @example
 * ```css
 * .parkCarousel { }
 *
 * .parkCarousel__root { }
 *
 * .parkCarousel__viewport {
 *   (@)apply rounded-l2 relative overflow-x-hidden;
 * }
 *
 * .parkCarousel__itemGroup {
 *   (@)apply flex;
 * }
 *
 * .parkCarousel__item { }
 *
 * .parkCarousel__nextTrigger { }
 *
 * .parkCarousel__prevTrigger { }
 *
 * .parkCarousel__indicatorGroup {
 *   (@)apply flex;
 * }
 *
 * .parkCarousel__indicator {
 *   (@)apply bg-gray-6 [&:is([data-current])]:bg-[--colors-color-palette-default] rounded-full [&:is(:focus-visible,_[data-focus-visible])]:outline [&:is(:focus-visible,_[data-focus-visible])]:outline-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-offset-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline cursor-pointer;
 * }
 *
 * .parkCarousel__control {
 *   (@)apply bg-gray-dark-a12 dark:bg-gray-light-a12 rounded-l2 absolute bottom-4 left-1/2 flex items-center -translate-y-1/2;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselStyledSlots = {
  base: "parkCarousel",
  root: "parkCarousel__root",
  viewport: [
    "parkCarousel__viewport",

    // Borders
    "rounded-l2",

    // Layout
    "relative",
    "overflow-x-hidden"
  ],
  itemGroup: [
    "parkCarousel__itemGroup",

    // Layout
    "flex"
  ],
  item: "parkCarousel__item",
  nextTrigger: "parkCarousel__nextTrigger",
  prevTrigger: "parkCarousel__prevTrigger",
  indicatorGroup: [
    "parkCarousel__indicatorGroup",

    // Layout
    "flex"
  ],
  indicator: [
    "parkCarousel__indicator",

    // Backgrounds
    "bg-gray-6",
    "[&:is([data-current])]:bg-[--colors-color-palette-default]",

    // Borders
    "rounded-full",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-offset-2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline",

    // Interactivity
    "cursor-pointer"
  ],
  control: [
    "parkCarousel__control",

    // Backgrounds
    "bg-gray-dark-a12",
    "dark:bg-gray-light-a12",

    // Borders
    "rounded-l2",

    // Layout
    "absolute",
    "bottom-4",
    "left-1/2",
    "flex",

    // Flexbox & Grid
    "items-center",

    // Transforms
    "-translate-y-1/2"
  ]
} as const satisfies Record<CarouselSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("carousel", carouselStyledSlots));
