import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as signaturePadAnatomy } from "@zag-js/signature-pad";

const component = {
  name: "Signature Pad",
  description: "A component that allows users to draw a signature using a signature pad."
};
const source = "https://ark-ui.com/vue/docs/components/signature-pad#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("signature-pad", signaturePadAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
