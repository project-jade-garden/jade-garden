import { type Slots, createSlots } from "@spark-css/core/pagination";

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
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/pagination").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  item: slots.item,
  ellipsis: slots.ellipsis,
  prevTrigger: slots.prevTrigger,
  nextTrigger: slots.nextTrigger
} satisfies Record<Slots, string | string[]>;

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
export const paginationStyles = styledSlots;
