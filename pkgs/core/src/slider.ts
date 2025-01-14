import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as sliderAnatomy } from "@zag-js/slider";

const component = {
  name: "Slider",
  description: "A control element that allows for a range of selections."
};
const source = "https://ark-ui.com/vue/docs/components/slider#anatomy";

export type SliderSlots = keyof ReturnType<typeof createSliderSlots>;

export const createSliderSlots = (args?: CSArgs) => createSlots("slider", sliderAnatomy.keys(), args);

export const createSliderDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
