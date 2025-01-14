import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as signaturePadAnatomy } from "@zag-js/signature-pad";

const component = {
  name: "Signature Pad",
  description: "A component that allows users to draw a signature using a signature pad."
};
const source = "https://ark-ui.com/vue/docs/components/signature-pad#anatomy";

export type SignaturePadSlots = keyof ReturnType<typeof createSignaturePadSlots>;

export const createSignaturePadSlots = (args?: CSArgs) =>
  createSlots("signature-pad", signaturePadAnatomy.keys(), args);

export const createSignaturePadDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
