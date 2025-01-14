import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as dialogAnatomy } from "@zag-js/dialog";

const component = {
  name: "Dialog",
  description: "A modal window that appears on top of the main content."
};
const source = "https://ark-ui.com/vue/docs/components/dialog#anatomy";

export type DialogSlots = keyof ReturnType<typeof createDialogSlots>;

export const createDialogSlots = (args?: CSArgs) => createSlots("dialog", dialogAnatomy.keys(), args);

export const createDialogDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
