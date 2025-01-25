import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as dialogAnatomy } from "@zag-js/dialog";

const component = {
  name: "Dialog",
  description: "A modal window that appears on top of the main content."
};
const source = "https://ark-ui.com/vue/docs/components/dialog#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("dialog", dialogAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
