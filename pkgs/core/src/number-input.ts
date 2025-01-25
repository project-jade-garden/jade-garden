import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as numberInputAnatomy } from "@zag-js/number-input";

const component = {
  name: "Number Input",
  description: "A field that allows user input of numeric values."
};
const source = "https://ark-ui.com/vue/docs/components/number-input#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("number-input", numberInputAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
