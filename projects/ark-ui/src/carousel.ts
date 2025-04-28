// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/carousel/carousel.anatomy.ts

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
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
 * @description A slideshow component that cycles through elements.
 * @see [source](https://ark-ui.com/docs/components/carousel#anatomy)
 */
export type Slots = (typeof slots)[number];
