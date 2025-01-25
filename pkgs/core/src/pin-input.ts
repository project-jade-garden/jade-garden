import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as pinInputAnatomy } from "@zag-js/pin-input";

const component = {
  name: "Pin Input",
  description: "For pin or verification codes with auto-focus transfer and masking options."
};
const source = "https://ark-ui.com/vue/docs/components/pin-input#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("pin-input", pinInputAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
