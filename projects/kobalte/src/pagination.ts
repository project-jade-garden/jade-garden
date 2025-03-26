// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/pagination/index.tsx

/**
 * **Pagination**
 * @description Allows the user to select a specific page from a range of pages.
 * @see [source](https://kobalte.dev/docs/core/components/pagination#anatomy)
 */
export const slots = ["root", "ellipsis", "item", "items", "next", "previous"] as const;

/**
 * **Pagination**
 * @description Allows the user to select a specific page from a range of pages.
 * @see [source](https://kobalte.dev/docs/core/components/pagination#anatomy)
 */
export type Slots = (typeof slots)[number];
