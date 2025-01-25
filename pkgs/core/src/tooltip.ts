import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as tooltipAnatomy } from "@zag-js/tooltip";

const component = {
  name: "Tooltip",
  description: "A label that provides information on hover or focus."
};
const source = "https://ark-ui.com/vue/docs/components/tooltip#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("tooltip", tooltipAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
