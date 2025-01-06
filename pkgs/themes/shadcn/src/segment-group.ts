// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/segment-group.ts
import { type SegmentGroupSlots, createSegmentGroupSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSegmentGroup",
 *   root: "parkSegmentGroup__root",
 *   label: "parkSegmentGroup__label",
 *   item: "parkSegmentGroup__item",
 *   itemText: "parkSegmentGroup__itemText",
 *   itemControl: "parkSegmentGroup__itemControl",
 *   indicator: "parkSegmentGroup__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const segmentGroupSlots = createSegmentGroupSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("segment-group", segmentGroupSlots));

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 *
 * @example
 * ```css
 * .parkSegmentGroup { }
 *
 * .parkSegmentGroup__root {
 *   (@)apply flex items-start data-[orientation=horizontal]:gap-4 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b data-[orientation=vertical]:gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-l;
 * }
 *
 * .parkSegmentGroup__label { }
 *
 * .parkSegmentGroup__item {
 *   (@)apply data-[orientation=horizontal]:px-1 data-[orientation=horizontal]:pb-3 data-[orientation=vertical]:px-3 data-[orientation=vertical]:py-1.5 cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:text-fg-default font-medium [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:font-semibold transition-[color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkSegmentGroup__itemText { }
 *
 * .parkSegmentGroup__itemControl { }
 *
 * .parkSegmentGroup__indicator {
 *   (@)apply data-[orientation=horizontal]:w-[50px] data-[orientation=vertical]:h-9 border-[--colors-color-palette-default] data-[orientation=horizontal]:border-b-2 data-[orientation=vertical]:border-l-2 data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:translate-y-px data-[orientation=vertical]:-translate-x-px;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const segmentGroupStyledSlots = {
  base: "parkSegmentGroup",
  root: [
    "parkSegmentGroup__root",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-start",
    "data-[orientation=horizontal]:gap-4",
    "data-[orientation=horizontal]:flex-row",
    "data-[orientation=horizontal]:border-b",
    "data-[orientation=vertical]:gap-1",
    "data-[orientation=vertical]:flex-col",
    "data-[orientation=vertical]:border-l"
  ],
  label: "parkSegmentGroup__label",
  item: [
    "parkSegmentGroup__item",

    // Spacing
    "data-[orientation=horizontal]:px-1",
    "data-[orientation=horizontal]:pb-3",
    "data-[orientation=vertical]:px-3",
    "data-[orientation=vertical]:py-1.5",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Typography
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:text-fg-default",
    "font-medium",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:font-semibold",

    // Transitions & Animation
    "transition-[color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  itemText: "parkSegmentGroup__itemText",
  itemControl: "parkSegmentGroup__itemControl",
  indicator: [
    "parkSegmentGroup__indicator",

    // Sizing
    "data-[orientation=horizontal]:w-[50px]",
    "data-[orientation=vertical]:h-9",

    // Borders
    "border-[--colors-color-palette-default]",
    "data-[orientation=horizontal]:border-b-2",
    "data-[orientation=vertical]:border-l-2",

    // Layout
    "data-[orientation=horizontal]:bottom-0",

    // Transforms
    "data-[orientation=horizontal]:translate-y-px",
    "data-[orientation=vertical]:-translate-x-px"
  ]
} as const satisfies Record<SegmentGroupSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("segment-group", segmentGroupStyledSlots));
