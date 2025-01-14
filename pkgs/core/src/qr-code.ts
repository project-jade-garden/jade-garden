import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as qrCodeAnatomy } from "@zag-js/qr-code";

const component = {
  name: "Qr Code",
  description: "A component that generates a QR code based on the provided data."
};
const source = "https://ark-ui.com/vue/docs/components/qr-code#anatomy";

export type QrCodeSlots = keyof ReturnType<typeof createQrCodeSlots>;

export const createQrCodeSlots = (args?: CSArgs) => createSlots("qr-code", qrCodeAnatomy.keys(), args);

export const createQrCodeDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
