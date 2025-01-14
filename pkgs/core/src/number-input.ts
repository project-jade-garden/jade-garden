import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as numberInputAnatomy } from "@zag-js/number-input";

const component = {
  name: "Number Input",
  description: "A field that allows user input of numeric values."
};
const source = "https://ark-ui.com/vue/docs/components/number-input#anatomy";

export type NumberInputSlots = keyof ReturnType<typeof createNumberInputSlots>;

export const createNumberInputSlots = (args?: CSArgs) => createSlots("number-input", numberInputAnatomy.keys(), args);

export const createNumberInputDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
