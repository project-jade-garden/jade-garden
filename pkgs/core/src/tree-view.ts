import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as treeViewAnatomy } from "@zag-js/tree-view";

const component = {
  name: "Tree View",
  description: "A component that is used to show a tree hierarchy."
};
const source = "https://ark-ui.com/vue/docs/components/tree-view#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("tree-view", treeViewAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
