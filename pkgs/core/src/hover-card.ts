import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as hoverCardAnatomy } from "@zag-js/hover-card";

const component = {
  name: "Hover Card",
  description: "A card that appears when a user hovers over an element."
};
const source = "https://ark-ui.com/vue/docs/components/hover-card#anatomy";

export type HoverCardSlots = keyof ReturnType<typeof createHoverCardSlots>;

export const createHoverCardSlots = (args?: CSArgs) => createSlots("hover-card", hoverCardAnatomy.keys(), args);

export const createHoverCardDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
