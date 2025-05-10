// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/popover/popover.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/docs/components/popover#anatomy)
 */
export const slots = [
  "arrow",
  "arrowTip",
  "anchor",
  "trigger",
  "indicator",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger"
] as const;

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/docs/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/docs/components/popover#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    arrow: {};
    arrowTip: {};
    anchor: {};
    trigger: {};
    indicator: {};
    positioner: {};
    content: {};
    title: {};
    description: {};
    closeTrigger: {};
  }
>;
