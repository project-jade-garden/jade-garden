import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as clipboardAnatomy } from "@zag-js/clipboard";

const component = {
  name: "Clipboard",
  description: "A component to copy text to the clipboard."
};
const source = "https://ark-ui.com/vue/docs/components/clipboard#anatomy";

export type ClipboardSlots = keyof ReturnType<typeof createClipboardSlots>;

export const createClipboardSlots = (args?: CSArgs) => createSlots("clipboard", clipboardAnatomy.keys(), args);

export const createClipboardDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
