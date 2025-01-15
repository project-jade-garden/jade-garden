import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as carouselAnatomy } from "@zag-js/carousel";

const component = {
  name: "Carousel",
  description: "A slideshow component that cycles through elements."
};
const source = "https://ark-ui.com/vue/docs/components/carousel#anatomy";

export type CarouselSlots = keyof ReturnType<typeof createCarouselSlots>;

export const createCarouselSlots = (args?: CSArgs) => createSlots("carousel", carouselAnatomy.keys(), args);

export const createCarouselDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
