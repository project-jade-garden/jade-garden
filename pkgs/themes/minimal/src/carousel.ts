import {
  type CarouselSlots,
  // createCarouselDocs,
  createCarouselSlots
} from "@spark-css/core";

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @returns
 * ```js
 * {
 *   base: "carousel",
 *   root: "carousel__root",
 *   viewport: "carousel__viewport",
 *   itemGroup: "carousel__item-group",
 *   item: "carousel__item",
 *   nextTrigger: "carousel__next-trigger",
 *   prevTrigger: "carousel__prev-trigger",
 *   indicatorGroup: "carousel__indicator-group",
 *   indicator: "carousel__indicator",
 *   control: "carousel__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselSlots = createCarouselSlots({});

// * Uncomment before styling slots
// createCarouselDocs("anatomy", carouselSlots);

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @example
 * ```css
 * .carousel { }
 *
 * .carousel__root { }
 *
 * .carousel__viewport { }
 *
 * .carousel__item-group { }
 *
 * .carousel__item { }
 *
 * .carousel__next-trigger { }
 *
 * .carousel__prev-trigger { }
 *
 * .carousel__indicator-group { }
 *
 * .carousel__indicator { }
 *
 * .carousel__control { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselStyledSlots = {
  base: "carousel",
  root: "carousel__root",
  viewport: "carousel__viewport",
  itemGroup: "carousel__item-group",
  item: "carousel__item",
  nextTrigger: "carousel__next-trigger",
  prevTrigger: "carousel__prev-trigger",
  indicatorGroup: "carousel__indicator-group",
  indicator: "carousel__indicator",
  control: "carousel__control"
} as const satisfies Record<CarouselSlots, string | string[]>;

// * Uncomment after styling slots
// createCarouselDocs("styled", carouselStyledSlots);
