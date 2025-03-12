// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/carousel/carousel.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const slots = [
  "root",
  "control",
  "indicator",
  "item",
  "itemGroup",
  "nextTrigger",
  "prevTrigger",
  "indicatorGroup",
  "autoplayTrigger"
] as const;

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
