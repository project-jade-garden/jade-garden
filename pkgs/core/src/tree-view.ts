import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as treeViewAnatomy } from "@zag-js/tree-view";

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export const createTreeViewSlots = (props?: GSProps) => generateSlots("tree-view", treeViewAnatomy.keys(), props);

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export type TreeViewSlots = keyof ReturnType<typeof createTreeViewSlots>;
