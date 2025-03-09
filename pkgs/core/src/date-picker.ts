import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as datePickerAnatomy } from "@zag-js/date-picker";

const component = {
  name: "Date Picker",
  description: "A component that allows users to select a date from a calendar."
};
const source = "https://ark-ui.com/vue/docs/components/date-picker#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("date-picker", datePickerAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
