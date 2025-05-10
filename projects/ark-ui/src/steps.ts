// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/steps/steps.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/docs/components/steps#anatomy)
 */
export const slots = [
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "nextTrigger",
  "prevTrigger",
  "progress"
] as const;

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/docs/components/steps#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 * @see [source](https://ark-ui.com/docs/components/steps#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    list: {};
    item: {};
    trigger: {};
    indicator: {};
    separator: {};
    content: {};
    nextTrigger: {};
    prevTrigger: {};
    progress: {};
  }
>;
