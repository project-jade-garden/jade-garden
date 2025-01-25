import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as comboboxAnatomy } from "@zag-js/combobox";

const component = {
  name: "Combobox",
  description: "A single input field that combines the functionality of a select and input."
};
const source = "https://ark-ui.com/vue/docs/components/combobox#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("combobox", comboboxAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
