// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/splitter.ts
import { type Slots, createSlots } from "@spark-css/core/splitter";

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSplitter",
 *   root: "parkSplitter__root",
 *   panel: "parkSplitter__panel",
 *   resizeTrigger: "parkSplitter__resizeTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/splitter").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-2"
  ],
  panel: [
    slots.panel,

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l2",
    "border",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center",
    "justify-center",

    // Typography
    "text-fg-muted"
  ],
  resizeTrigger: [
    slots.resizeTrigger,

    // Spacing
    "data-[orientation=horizontal]:mx-0",
    "data-[orientation=horizontal]:my-[min(1rem,_20%)]",
    "data-[orientation=vertical]:mx-[min(1rem,_20%)]",
    "data-[orientation=vertical]:my-0",

    // Sizing
    "data-[orientation=horizontal]:min-w-1.5",
    "data-[orientation=vertical]:min-h-1.5",

    // Backgrounds
    "bg-[--colors-gray-7]",
    "[&:is(:active,_[data-active])]:bg-[--colors-gray-8]",

    // Borders
    "rounded-full",
    "outline-0",

    // Transitions & Animation
    "transition-[background]",
    "duration-200",
    "ease-[--easings-default]"
  ]
} satisfies Record<Slots, string | string[]>;

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @example
 * ```css
 * .parkSplitter { }
 *
 * .parkSplitter__root {
 *   (@)apply flex gap-2;
 * }
 *
 * .parkSplitter__panel {
 *   (@)apply bg-bg-default rounded-l2 border flex items-center justify-center text-fg-muted;
 * }
 *
 * .parkSplitter__resizeTrigger {
 *   (@)apply data-[orientation=horizontal]:mx-0 data-[orientation=horizontal]:my-[min(1rem,_20%)] data-[orientation=vertical]:mx-[min(1rem,_20%)] data-[orientation=vertical]:my-0 data-[orientation=horizontal]:min-w-1.5 data-[orientation=vertical]:min-h-1.5 bg-[--colors-gray-7] [&:is(:active,_[data-active])]:bg-[--colors-gray-8] rounded-full outline-0 transition-[background] duration-200 ease-[--easings-default];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const splitter = styledSlots;
