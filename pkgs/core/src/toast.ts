import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as toastAnatomy } from "@zag-js/toast";

const component = {
  name: "Toast",
  description: "A message that appears on the screen to provide feedback on an action."
};
const source = "https://ark-ui.com/vue/docs/components/toast#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("toast", toastAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
