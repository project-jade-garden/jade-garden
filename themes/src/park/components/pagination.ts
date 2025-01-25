// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/pagination.ts
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/pagination";

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
export const paginationSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", paginationSlots);

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
export const paginationStyledSlots = {
  base: "parkPagination",
  root: [
    "parkPagination__root",

    // Layout
    "flex",
    "gap-2.5"
  ],
  item: [
    "parkPagination__item",

    // Typography
    "tabular-nums"
  ],
  ellipsis: [
    "parkPagination__ellipsis",

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
  prevTrigger: "parkPagination__prevTrigger",
  nextTrigger: "parkPagination__nextTrigger"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", paginationStyledSlots);
