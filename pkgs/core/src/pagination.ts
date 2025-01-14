import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as paginationAnatomy } from "@zag-js/pagination";

const component = {
  name: "Pagination",
  description: "A navigation component that allows users to browse through pages."
};
const source = "https://ark-ui.com/vue/docs/components/pagination#anatomy";

export type PaginationSlots = keyof ReturnType<typeof createPaginationSlots>;

export const createPaginationSlots = (args?: CSArgs) => createSlots("pagination", paginationAnatomy.keys(), args);

export const createPaginationDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
