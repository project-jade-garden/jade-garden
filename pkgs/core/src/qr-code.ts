import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as qrCodeAnatomy } from "@zag-js/qr-code";

const component = {
  name: "Qr Code",
  description: "A component that generates a QR code based on the provided data."
};
const source = "https://ark-ui.com/vue/docs/components/qr-code#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("qr-code", qrCodeAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
