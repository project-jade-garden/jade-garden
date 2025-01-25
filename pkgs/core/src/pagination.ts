import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as paginationAnatomy } from "@zag-js/pagination";

const component = {
  name: "Pagination",
  description: "A navigation component that allows users to browse through pages."
};
const source = "https://ark-ui.com/vue/docs/components/pagination#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("pagination", paginationAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
