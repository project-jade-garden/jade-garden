import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/carousel/carousel.anatomy.ts
import { anatomy } from "@zag-js/carousel";

const carouselAnatomy = anatomy.extendWith("control");

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const createCarouselSlots = (props?: GSProps) => generateSlots("carousel", carouselAnatomy.keys(), props);

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export type CarouselSlots = keyof ReturnType<typeof createCarouselSlots>;
