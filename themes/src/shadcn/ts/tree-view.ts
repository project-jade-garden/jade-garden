// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/tree-view.ts
import { type Slots, createSlots } from "@spark-css/core/tree-view";

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 *
 * @returns
 * ```js
 * {
 *   base: "parkTreeView",
 *   root: "parkTreeView__root",
 *   label: "parkTreeView__label",
 *   tree: "parkTreeView__tree",
 *   item: "parkTreeView__item",
 *   itemIndicator: "parkTreeView__itemIndicator",
 *   itemText: "parkTreeView__itemText",
 *   branch: "parkTreeView__branch",
 *   branchControl: "parkTreeView__branchControl",
 *   branchTrigger: "parkTreeView__branchTrigger",
 *   branchContent: "parkTreeView__branchContent",
 *   branchText: "parkTreeView__branchText",
 *   branchIndicator: "parkTreeView__branchIndicator",
 *   branchIndentGuide: "parkTreeView__branchIndentGuide"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef { import("@spark-css/core/tree-view").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Sizing
    "w-full"
  ],
  label: slots.label,
  tree: [
    slots.tree,

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-3",
    "flex-col"
  ],
  item: [
    slots.item,

    // Spacing
    "pl-[calc(((var(--depth)_-_1)_*_22px)_+_22px)]",
    "data-[depth=1]:pl-6",
    "py-1.5",

    // Sizing
    "[&:is([aria-selected=true],_[data-selected])]:before:w-0.5",
    "[&:is([aria-selected=true],_[data-selected])]:before:h-full",

    // Backgrounds
    "[&:is([aria-selected=true],_[data-selected])]:before:bg-accent-default",
    "[&:is([aria-selected=true],_[data-selected])]:bg-[--colors-color-palette-a2]",
    "[&:is([aria-selected=true],_[data-selected])]:data-[depth=1]:before:bg-transparent",

    // Borders
    "rounded-l2",

    // Interactivity
    "cursor-pointer",

    // Layout
    "relative",
    "[&:is([aria-selected=true],_[data-selected])]:before:absolute",
    "[&:is([aria-selected=true],_[data-selected])]:before:left-3",
    "[&:is([aria-selected=true],_[data-selected])]:before:top-0",
    "[&:is([aria-selected=true],_[data-selected])]:before:z-[1]",

    // Typography
    "[&:is([aria-selected=true],_[data-selected])]:before:content-['']",
    "text-fg-muted",
    "data-[depth=1]:text-fg-default",
    "[&:is([aria-selected=true],_[data-selected])]:text-[--colors-color-palette-text]",
    "text-sm",
    "font-medium",
    "data-[depth=1]:font-semibold",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  itemIndicator: slots.itemIndicator,
  itemText: slots.itemText,
  branch: [
    slots.branch,

    // Sizing
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:h-full",
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:w-px",

    // Backgrounds
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:bg-border-default",

    // Layout
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:absolute",
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:left-3",
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:z-[1]",

    // Typography
    "[&[data-depth=1]_>_[data-part=branch-content]:before]:content-['']"
  ],
  branchControl: [
    slots.branchControl,

    // Spacing
    "px-[calc((var(--depth)_-_1)_*_22px)]",
    "data-[depth=1]:pl-1",
    "py-1.5",

    // Borders
    "rounded-l2",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "items-center",

    // Typography
    "text-fg-muted",
    "[&[data-depth=1]_>_[data-part=branch-text]]:text-fg-default",
    "text-sm",
    "font-medium",
    "[&[data-depth=1]_>_[data-part=branch-text]]:font-semibold",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  branchTrigger: slots.branchTrigger,
  branchContent: [
    slots.branchContent,

    // Layout
    "relative"
  ],
  branchText: slots.branchText,
  branchIndicator: [
    slots.branchIndicator,

    // Sizing
    "[&_svg]:size-4",

    // Typography
    "text-[--colors-color-palette-default]",
    "[&_svg]:text-base",

    // Transforms
    "origin-center",
    "[&:is([open],_[data-open],_[data-state=open])]:rotate-90",

    // Transitions & Animation
    "transition-[transform]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  branchIndentGuide: slots.branchIndentGuide
} satisfies Record<Slots, string | string[]>;

/**
 * **Tree View**
 * @description A component that is used to show a tree hierarchy.
 *
 * @example
 * ```css
 * .parkTreeView { }
 *
 * .parkTreeView__root {
 *   (@)apply w-full;
 * }
 *
 * .parkTreeView__label { }
 *
 * .parkTreeView__tree {
 *   (@)apply flex gap-3 flex-col;
 * }
 *
 * .parkTreeView__item {
 *   (@)apply pl-[calc(((var(--depth)_-_1)_*_22px)_+_22px)] data-[depth=1]:pl-6 py-1.5 [&:is([aria-selected=true],_[data-selected])]:before:w-0.5 [&:is([aria-selected=true],_[data-selected])]:before:h-full [&:is([aria-selected=true],_[data-selected])]:before:bg-accent-default [&:is([aria-selected=true],_[data-selected])]:bg-[--colors-color-palette-a2] [&:is([aria-selected=true],_[data-selected])]:data-[depth=1]:before:bg-transparent rounded-l2 cursor-pointer relative [&:is([aria-selected=true],_[data-selected])]:before:absolute [&:is([aria-selected=true],_[data-selected])]:before:left-3 [&:is([aria-selected=true],_[data-selected])]:before:top-0 [&:is([aria-selected=true],_[data-selected])]:before:z-[1] [&:is([aria-selected=true],_[data-selected])]:before:content-[''] text-fg-muted data-[depth=1]:text-fg-default [&:is([aria-selected=true],_[data-selected])]:text-[--colors-color-palette-text] text-sm font-medium data-[depth=1]:font-semibold transition-[background,_color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkTreeView__itemIndicator { }
 *
 * .parkTreeView__itemText { }
 *
 * .parkTreeView__branch {
 *   (@)apply [&[data-depth=1]_>_[data-part=branch-content]:before]:h-full [&[data-depth=1]_>_[data-part=branch-content]:before]:w-px [&[data-depth=1]_>_[data-part=branch-content]:before]:bg-border-default [&[data-depth=1]_>_[data-part=branch-content]:before]:absolute [&[data-depth=1]_>_[data-part=branch-content]:before]:left-3 [&[data-depth=1]_>_[data-part=branch-content]:before]:z-[1] [&[data-depth=1]_>_[data-part=branch-content]:before]:content-[''];
 * }
 *
 * .parkTreeView__branchControl {
 *   (@)apply px-[calc((var(--depth)_-_1)_*_22px)] data-[depth=1]:pl-1 py-1.5 rounded-l2 flex gap-1.5 items-center text-fg-muted [&[data-depth=1]_>_[data-part=branch-text]]:text-fg-default text-sm font-medium [&[data-depth=1]_>_[data-part=branch-text]]:font-semibold transition-[background,_color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkTreeView__branchTrigger { }
 *
 * .parkTreeView__branchContent {
 *   (@)apply relative;
 * }
 *
 * .parkTreeView__branchText { }
 *
 * .parkTreeView__branchIndicator {
 *   (@)apply [&_svg]:size-4 text-[--colors-color-palette-default] [&_svg]:text-base origin-center [&:is([open],_[data-open],_[data-state=open])]:rotate-90 transition-[transform] duration-200 ease-[--easings-default];
 * }
 *
 * .parkTreeView__branchIndentGuide { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tree-view#anatomy)
 */
export const treeViewStyles = styledSlots;
