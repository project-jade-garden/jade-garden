import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as timerAnatomy } from "@zag-js/timer";

const component = {
  name: "Timer",
  description: "Used to record the time elapsed from zero or since a specified target time."
};
const source = "https://ark-ui.com/vue/docs/components/timer#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("timer", timerAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
