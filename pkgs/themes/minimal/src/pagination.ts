import { type PaginationSlots, createPaginationSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 *
 * @returns
 * ```js
 * {
 *   base: "pagination",
 *   root: "pagination__root",
 *   item: "pagination__item",
 *   ellipsis: "pagination__ellipsis",
 *   prevTrigger: "pagination__prev-trigger",
 *   nextTrigger: "pagination__next-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export const paginationSlots = createPaginationSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("pagination", paginationSlots));

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 *
 * @example
 * ```css
 * .pagination { }
 *
 * .pagination__root { }
 *
 * .pagination__item { }
 *
 * .pagination__ellipsis { }
 *
 * .pagination__prev-trigger { }
 *
 * .pagination__next-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export const paginationStyledSlots = {
  base: "pagination",
  root: "pagination__root",
  item: "pagination__item",
  ellipsis: "pagination__ellipsis",
  prevTrigger: "pagination__prev-trigger",
  nextTrigger: "pagination__next-trigger"
} as const satisfies Record<PaginationSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("pagination", paginationStyledSlots));
