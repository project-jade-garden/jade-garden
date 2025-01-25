import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as splitterAnatomy } from "@zag-js/splitter";

const component = {
  name: "Splitter",
  description: "A component that divides your interface into resizable sections."
};
const source = "https://ark-ui.com/vue/docs/components/splitter#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("splitter", splitterAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
