import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as accordionAnatomy } from "@zag-js/accordion";

const component = {
  name: "Accordion",
  description: "A collapsible component for displaying content in a vertical stack."
};
const source = "https://ark-ui.com/vue/docs/components/accordion#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("accordion", accordionAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
