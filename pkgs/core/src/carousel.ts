import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as carouselAnatomy } from "@zag-js/carousel";

const component = {
  name: "Carousel",
  description: "A slideshow component that cycles through elements."
};
const source = "https://ark-ui.com/vue/docs/components/carousel#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("carousel", carouselAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
