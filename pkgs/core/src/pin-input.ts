import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as pinInputAnatomy } from "@zag-js/pin-input";

const component = {
  name: "Pin Input",
  description: "For pin or verification codes with auto-focus transfer and masking options."
};
const source = "https://ark-ui.com/vue/docs/components/pin-input#anatomy";

export type PinInputSlots = keyof ReturnType<typeof createPinInputSlots>;

export const createPinInputSlots = (args?: CSArgs) => createSlots("pin-input", pinInputAnatomy.keys(), args);

export const createPinInputDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
