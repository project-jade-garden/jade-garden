// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/carousel/carousel.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Carousel**
 * @description An interactive slideshow component for cycling through elements.
 * @see [source](https://ark-ui.com/docs/components/carousel#anatomy)
 */
export const slots = [
  "root",
  "itemGroup",
  "item",
  "control",
  "nextTrigger",
  "prevTrigger",
  "indicatorGroup",
  "indicator",
  "autoplayTrigger"
] as const;

/**
 * **Carousel**
 * @description An interactive slideshow component for cycling through elements.
 * @see [source](https://ark-ui.com/docs/components/carousel#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Carousel**
 * @description An interactive slideshow component for cycling through elements.
 * @see [source](https://ark-ui.com/docs/components/carousel#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "carousel";
      part: "root";
      orientation: "horizontal" | "vertical";
    };
    itemGroup: {
      scope: "carousel";
      part: "item-group";
      orientation: "horizontal" | "vertical";
      dragging: "";
    };
    item: {
      scope: "carousel";
      part: "item";
      index: "number";
      inview: "";
      orientation: "horizontal" | "vertical";
    };
    control: {
      scope: "carousel";
      part: "control";
      orientation: "horizontal" | "vertical";
    };
    nextTrigger: {
      scope: "carousel";
      part: "next-trigger";
      orientation: "horizontal" | "vertical";
    };
    prevTrigger: {
      scope: "carousel";
      part: "prev-trigger";
      orientation: "horizontal" | "vertical";
    };
    indicatorGroup: {
      scope: "carousel";
      part: "indicator-group";
      orientation: "horizontal" | "vertical";
    };
    indicator: {
      scope: "carousel";
      part: "indicator";
      orientation: "horizontal" | "vertical";
      index: "number";
      readonly: "";
      current: "";
    };
    autoplayTrigger: {
      scope: "carousel";
      part: "autoplay-trigger";
      orientation: "horizontal" | "vertical";
      pressed: "";
    };
  }
>;
