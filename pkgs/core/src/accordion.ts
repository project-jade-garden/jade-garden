import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as accordionAnatomy } from "@zag-js/accordion";

const component = {
  name: "Accordion",
  description: "A collapsible component for displaying content in a vertical stack."
};
const source = "https://ark-ui.com/vue/docs/components/accordion#anatomy";

export type AccordionSlots = keyof ReturnType<typeof createAccordionSlots>;

export const createAccordionSlots = (args?: CSArgs) => createSlots("accordion", accordionAnatomy.keys(), args);

export const createAccordionDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
