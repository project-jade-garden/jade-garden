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
    root: {};
    itemGroup: {};
    item: {};
    control: {};
    nextTrigger: {};
    prevTrigger: {};
    indicatorGroup: {};
    indicator: {};
    autoplayTrigger: {};
  }
>;
