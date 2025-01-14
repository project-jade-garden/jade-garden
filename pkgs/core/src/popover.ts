import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as popoverAnatomy } from "@zag-js/popover";

const component = {
  name: "Popover",
  description: "An overlay that displays additional information or options when triggered."
};
const source = "https://ark-ui.com/vue/docs/components/popover#anatomy";

export type PopoverSlots = keyof ReturnType<typeof createPopoverSlots>;

export const createPopoverSlots = (args?: CSArgs) => createSlots("popover", popoverAnatomy.keys(), args);

export const createPopoverDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
