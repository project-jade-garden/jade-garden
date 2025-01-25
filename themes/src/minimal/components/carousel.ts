import { type Slots, createSlots } from "@spark-css/core/carousel";

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @returns
 * ```js
 * {
 *   base: "carousel",
 *   root: "carousel__root",
 *   itemGroup: "carousel__item-group",
 *   item: "carousel__item",
 *   control: "carousel__control",
 *   nextTrigger: "carousel__next-trigger",
 *   prevTrigger: "carousel__prev-trigger",
 *   indicatorGroup: "carousel__indicator-group",
 *   indicator: "carousel__indicator",
 *   autoplayTrigger: "carousel__autoplay-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "carousel",
  root: "carousel__root",
  itemGroup: "carousel__item-group",
  item: "carousel__item",
  control: "carousel__control",
  nextTrigger: "carousel__next-trigger",
  prevTrigger: "carousel__prev-trigger",
  indicatorGroup: "carousel__indicator-group",
  indicator: "carousel__indicator",
  autoplayTrigger: "carousel__autoplay-trigger"
} satisfies Record<Slots, string | string[]>;

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
 * .carousel__item-group { }
 *
 * .carousel__item { }
 *
 * .carousel__control { }
 *
 * .carousel__next-trigger { }
 *
 * .carousel__prev-trigger { }
 *
 * .carousel__indicator-group { }
 *
 * .carousel__indicator { }
 *
 * .carousel__autoplay-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carousel = styledSlots;
