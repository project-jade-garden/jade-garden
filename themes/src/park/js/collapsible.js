// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/collapsible.ts
import { createSlots } from "@spark-css/core/collapsible";
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
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/collapsible").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Sizing
    "w-full",
    // Layout
    "flex",
    // Flexbox & Grid
    "items-start",
    "flex-col"
  ],
  trigger: slots.trigger,
  content: [
    slots.content,
    // Sizing
    "w-full",
    // Layout
    "overflow-hidden",
    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-collapse-in]",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-collapse-out]"
  ]
};
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
export const collapsible = styledSlots;
