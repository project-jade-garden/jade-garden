import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as collapsibleAnatomy } from "@zag-js/collapsible";

const component = {
  name: "Collapsible",
  description: "An interactive component that can be expanded or collapsed."
};
const source = "https://ark-ui.com/vue/docs/components/collapsible#anatomy";

export type CollapsibleSlots = keyof ReturnType<typeof createCollapsibleSlots>;

export const createCollapsibleSlots = (args?: CSArgs) => createSlots("collapsible", collapsibleAnatomy.keys(), args);

export const createCollapsibleDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
