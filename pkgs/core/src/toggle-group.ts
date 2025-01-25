import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as toggleGroupAnatomy } from "@zag-js/toggle-group";

const component = {
  name: "Toggle Group",
  description: "A set of two-state buttons that can be toggled on or off."
};
const source = "https://ark-ui.com/vue/docs/components/toggle-group#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("toggle-group", toggleGroupAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
