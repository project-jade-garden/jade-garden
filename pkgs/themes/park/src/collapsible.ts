// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/collapsible.ts
import { type CollapsibleSlots, createCollapsibleSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @returns
 * ```js
 * {
 *   base: "parkCollapsible",
 *   root: "parkCollapsible__root",
 *   trigger: "parkCollapsible__trigger",
 *   content: "parkCollapsible__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const collapsibleSlots = createCollapsibleSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("collapsible", collapsibleSlots));

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @example
 * ```css
 * .parkCollapsible { }
 *
 * .parkCollapsible__root {
 *   (@)apply w-full flex items-start flex-col;
 * }
 *
 * .parkCollapsible__trigger { }
 *
 * .parkCollapsible__content {
 *   (@)apply w-full overflow-hidden [&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-collapse-in] [&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-collapse-out];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const collapsibleStyledSlots = {
  base: "parkCollapsible",
  root: [
    "parkCollapsible__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-start",
    "flex-col"
  ],
  trigger: "parkCollapsible__trigger",
  content: [
    "parkCollapsible__content",

    // Sizing
    "w-full",

    // Layout
    "overflow-hidden",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-collapse-in]",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-collapse-out]"
  ]
} as const satisfies Record<CollapsibleSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("collapsible", collapsibleStyledSlots));
