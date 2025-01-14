import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as treeViewAnatomy } from "@zag-js/tree-view";

const component = {
  name: "Tree View",
  description: "A component that is used to show a tree hierarchy."
};
const source = "https://ark-ui.com/vue/docs/components/tree-view#anatomy";

export type TreeViewSlots = keyof ReturnType<typeof createTreeViewSlots>;

export const createTreeViewSlots = (args?: CSArgs) => createSlots("tree-view", treeViewAnatomy.keys(), args);

export const createTreeViewDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
