// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tree-view/tree-view.anatomy.ts

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export const slots = [
  "root",
  "label",
  "tree",
  "item",
  "itemIndicator",
  "itemText",
  "branch",
  "branchControl",
  "branchTrigger",
  "branchContent",
  "branchText",
  "branchIndicator",
  "branchIndentGuide"
] as const;

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export type Slots = (typeof slots)[number];
