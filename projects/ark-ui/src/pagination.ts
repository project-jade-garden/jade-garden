// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/pagination/pagination.anatomy.ts

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/docs/components/pagination#anatomy)
 */
export const slots = ["root", "item", "ellipsis", "prevTrigger", "nextTrigger"] as const;

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/docs/components/pagination#anatomy)
 */
export type Slots = (typeof slots)[number];
