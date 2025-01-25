import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as popoverAnatomy } from "@zag-js/popover";

const component = {
  name: "Popover",
  description: "An overlay that displays additional information or options when triggered."
};
const source = "https://ark-ui.com/vue/docs/components/popover#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("popover", popoverAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
