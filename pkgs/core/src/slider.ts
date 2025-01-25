import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as sliderAnatomy } from "@zag-js/slider";

const component = {
  name: "Slider",
  description: "A control element that allows for a range of selections."
};
const source = "https://ark-ui.com/vue/docs/components/slider#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("slider", sliderAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
