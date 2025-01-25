import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as radioGroupAnatomy } from "@zag-js/radio-group";

const component = {
  name: "Radio Group",
  description: "Allows single selection from multiple options."
};
const source = "https://ark-ui.com/vue/docs/components/radio-group#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("radio-group", radioGroupAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
