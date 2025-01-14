import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as switchAnatomy } from "@zag-js/switch";

const component = {
  name: "Switch",
  description: "A control element that allows for a binary selection."
};
const source = "https://ark-ui.com/vue/docs/components/switch#anatomy";

export type SwitchSlots = keyof ReturnType<typeof createSwitchSlots>;

export const createSwitchSlots = (args?: CSArgs) => createSlots("switch", switchAnatomy.keys(), args);

export const createSwitchDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
