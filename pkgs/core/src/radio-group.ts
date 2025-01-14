import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as radioGroupAnatomy } from "@zag-js/radio-group";

const component = {
  name: "Radio Group",
  description: "Allows single selection from multiple options."
};
const source = "https://ark-ui.com/vue/docs/components/radio-group#anatomy";

export type RadioGroupSlots = keyof ReturnType<typeof createRadioGroupSlots>;

export const createRadioGroupSlots = (args?: CSArgs) => createSlots("radio-group", radioGroupAnatomy.keys(), args);

export const createRadioGroupDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
