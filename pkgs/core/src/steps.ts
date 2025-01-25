import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as stepsAnatomy } from "@zag-js/steps";

const component = {
  name: "Steps",
  description: "Used to guide users through a series of steps in a process."
};
const source = "https://ark-ui.com/vue/docs/components/steps#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("steps", stepsAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
