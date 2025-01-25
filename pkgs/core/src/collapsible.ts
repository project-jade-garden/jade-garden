import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as collapsibleAnatomy } from "@zag-js/collapsible";

const component = {
  name: "Collapsible",
  description: "An interactive component that can be expanded or collapsed."
};
const source = "https://ark-ui.com/vue/docs/components/collapsible#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("collapsible", collapsibleAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
