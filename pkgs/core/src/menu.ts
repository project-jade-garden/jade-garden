import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as menuAnatomy } from "@zag-js/menu";

const component = {
  name: "Menu",
  description: "A list of options that appears when a user interacts with a button."
};
const source = "https://ark-ui.com/vue/docs/components/menu#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("menu", menuAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
