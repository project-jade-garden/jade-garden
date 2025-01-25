import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as hoverCardAnatomy } from "@zag-js/hover-card";

const component = {
  name: "Hover Card",
  description: "A card that appears when a user hovers over an element."
};
const source = "https://ark-ui.com/vue/docs/components/hover-card#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("hover-card", hoverCardAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
