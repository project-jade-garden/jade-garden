import { type TreeViewSlots, createTreeViewSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 *
 * @returns
 * ```js
 * {
 *   base: "tree-view",
 *   root: "tree-view__root",
 *   label: "tree-view__label",
 *   tree: "tree-view__tree",
 *   item: "tree-view__item",
 *   itemIndicator: "tree-view__item-indicator",
 *   itemText: "tree-view__item-text",
 *   branch: "tree-view__branch",
 *   branchControl: "tree-view__branch-control",
 *   branchTrigger: "tree-view__branch-trigger",
 *   branchContent: "tree-view__branch-content",
 *   branchText: "tree-view__branch-text",
 *   branchIndicator: "tree-view__branch-indicator",
 *   branchIndentGuide: "tree-view__branch-indent-guide"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export const treeViewSlots = createTreeViewSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("tree-view", treeViewSlots));

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 *
 * @example
 * ```css
 * .tree-view { }
 *
 * .tree-view__root { }
 *
 * .tree-view__label { }
 *
 * .tree-view__tree { }
 *
 * .tree-view__item { }
 *
 * .tree-view__item-indicator { }
 *
 * .tree-view__item-text { }
 *
 * .tree-view__branch { }
 *
 * .tree-view__branch-control { }
 *
 * .tree-view__branch-trigger { }
 *
 * .tree-view__branch-content { }
 *
 * .tree-view__branch-text { }
 *
 * .tree-view__branch-indicator { }
 *
 * .tree-view__branch-indent-guide { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export const treeViewStyledSlots = {
  base: "tree-view",
  root: "tree-view__root",
  label: "tree-view__label",
  tree: "tree-view__tree",
  item: "tree-view__item",
  itemIndicator: "tree-view__item-indicator",
  itemText: "tree-view__item-text",
  branch: "tree-view__branch",
  branchControl: "tree-view__branch-control",
  branchTrigger: "tree-view__branch-trigger",
  branchContent: "tree-view__branch-content",
  branchText: "tree-view__branch-text",
  branchIndicator: "tree-view__branch-indicator",
  branchIndentGuide: "tree-view__branch-indent-guide"
} as const satisfies Record<TreeViewSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("tree-view", treeViewStyledSlots));
