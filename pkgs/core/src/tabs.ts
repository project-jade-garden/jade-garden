import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as tabsAnatomy } from "@zag-js/tabs";

const component = {
  name: "Tabs",
  description: "Flexible navigation tool with various modes and features."
};
const source = "https://ark-ui.com/vue/docs/components/tabs#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("tabs", tabsAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
