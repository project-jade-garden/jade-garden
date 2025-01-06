import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as paginationAnatomy } from "@zag-js/pagination";

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export const createPaginationSlots = (props?: GSProps) => generateSlots("pagination", paginationAnatomy.keys(), props);

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export type PaginationSlots = keyof ReturnType<typeof createPaginationSlots>;
