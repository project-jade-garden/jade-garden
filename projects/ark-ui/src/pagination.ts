// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/pagination/pagination.anatomy.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/docs/components/pagination#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    item: {
      scope: "pagination";
      part: "item";
      index: "number";
      selected: "";
    };
    prevTrigger: {
      scope: "pagination";
      part: "prev-trigger";
      disabled: "";
    };
    nextTrigger: {
      scope: "pagination";
      part: "next-trigger";
      disabled: "";
    };
  }
>;
