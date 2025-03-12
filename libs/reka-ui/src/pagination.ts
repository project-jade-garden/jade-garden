// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Pagination/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Pagination**
 * @description Displays data in paged format and provides navigation between pages.
 * @see [source](https://reka-ui.com/docs/components/pagination#anatomy)
 */
export const slots = ["root", "ellipsis", "first", "last", "list", "listItem", "next", "prev"] as const;

/**
 * **Pagination**
 * @description Displays data in paged format and provides navigation between pages.
 * @see [source](https://reka-ui.com/docs/components/pagination#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
