// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tree-view/tree-view.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/docs/components/tree-view#anatomy)
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
 * @see [source](https://ark-ui.com/docs/components/tree-view#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 * @see [source](https://ark-ui.com/docs/components/tree-view#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    item: {
      scope: "tree-view";
      part: "item";
      path: "";
      value: "";
      focus: "";
      selected: "";
      disabled: "";
      depth: "number";
    };
    itemIndicator: {
      scope: "tree-view";
      part: "item-indicator";
      disabled: "";
      selected: "";
      focus: "";
    };
    itemText: {
      scope: "tree-view";
      part: "item-text";
      disabled: "";
      selected: "";
      focus: "";
    };
    branch: {
      scope: "tree-view";
      part: "branch";
      depth: "number";
      branch: "";
      value: "";
      path: "";
      selected: "";
      state: "open" | "closed";
      disabled: "";
    };
    branchControl: {
      scope: "tree-view";
      part: "branch-control";
      path: "";
      state: "open" | "closed";
      disabled: "";
      selected: "";
      focus: "";
      value: "";
      depth: "number";
    };
    branchTrigger: {
      scope: "tree-view";
      part: "branch-trigger";
      disabled: "";
      state: "open" | "closed";
      value: "";
    };
    branchContent: {
      scope: "tree-view";
      part: "branch-content";
      state: "open" | "closed";
      depth: "number";
      path: "";
      value: "";
    };
    branchText: {
      scope: "tree-view";
      part: "branch-text";
      disabled: "";
      state: "open" | "closed";
    };
    branchIndicator: {
      scope: "tree-view";
      part: "branch-indicator";
      state: "open" | "closed";
      disabled: "";
      selected: "";
      focus: "";
    };
    branchIndentGuide: {
      scope: "tree-view";
      part: "branch-indent-guide";
      depth: "number";
    };
  }
>;
