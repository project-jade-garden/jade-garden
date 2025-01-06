import { type CollapsibleSlots, createCollapsibleSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @returns
 * ```js
 * {
 *   base: "collapsible",
 *   root: "collapsible__root",
 *   trigger: "collapsible__trigger",
 *   content: "collapsible__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const collapsibleSlots = createCollapsibleSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("collapsible", collapsibleSlots));

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @example
 * ```css
 * .collapsible { }
 *
 * .collapsible__root { }
 *
 * .collapsible__trigger { }
 *
 * .collapsible__content { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const collapsibleStyledSlots = {
  base: "collapsible",
  root: "collapsible__root",
  trigger: "collapsible__trigger",
  content: "collapsible__content"
} as const satisfies Record<CollapsibleSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("collapsible", collapsibleStyledSlots));
