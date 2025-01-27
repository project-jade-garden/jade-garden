// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/pagination.ts
import { createSlots } from "@spark-css/core/pagination";
/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 *
 * @returns
 * ```js
 * {
 *   base: "parkPagination",
 *   root: "parkPagination__root",
 *   item: "parkPagination__item",
 *   ellipsis: "parkPagination__ellipsis",
 *   prevTrigger: "parkPagination__prevTrigger",
 *   nextTrigger: "parkPagination__nextTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/pagination").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Layout
    "flex",
    "gap-2.5"
  ],
  item: [
    slots.item,
    // Typography
    "tabular-nums"
  ],
  ellipsis: [
    slots.ellipsis,
    // Spacing
    "px-2",
    // Layout
    "inline-flex",
    // Flexbox & Grid
    "items-center",
    // Typography
    "text-fg-default",
    "font-semibold"
  ],
  prevTrigger: slots.prevTrigger,
  nextTrigger: slots.nextTrigger
};
/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 *
 * @example
 * ```css
 * .parkPagination { }
 *
 * .parkPagination__root {
 *   (@)apply flex gap-2.5;
 * }
 *
 * .parkPagination__item {
 *   (@)apply tabular-nums;
 * }
 *
 * .parkPagination__ellipsis {
 *   (@)apply px-2 inline-flex items-center text-fg-default font-semibold;
 * }
 *
 * .parkPagination__prevTrigger { }
 *
 * .parkPagination__nextTrigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export const paginationStyles = styledSlots;
