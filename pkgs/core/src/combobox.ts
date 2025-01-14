import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as comboboxAnatomy } from "@zag-js/combobox";

const component = {
  name: "Combobox",
  description: "A single input field that combines the functionality of a select and input."
};
const source = "https://ark-ui.com/vue/docs/components/combobox#anatomy";

export type ComboboxSlots = keyof ReturnType<typeof createComboboxSlots>;

export const createComboboxSlots = (args?: CSArgs) => createSlots("combobox", comboboxAnatomy.keys(), args);

export const createComboboxDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
