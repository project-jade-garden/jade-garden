// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/steps/steps.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process
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
 * @description Used to guide users through a series of steps in a process
 * @see [source](https://ark-ui.com/docs/components/steps#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process
 * @see [source](https://ark-ui.com/docs/components/steps#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "steps";
      part: "root";
      orientation: "horizontal" | "vertical";
    };
    list: {
      scope: "steps";
      part: "list";
      orientation: "horizontal" | "vertical";
    };
    item: {
      scope: "steps";
      part: "item";
      orientation: "horizontal" | "vertical";
    };
    trigger: {
      scope: "steps";
      part: "trigger";
      state: "open" | "closed";
      orientation: "horizontal" | "vertical";
      complete: "";
      current: "";
      incomplete: "";
    };
    indicator: {
      scope: "steps";
      part: "indicator";
      complete: "";
      current: "";
      incomplete: "";
    };
    separator: {
      scope: "steps";
      part: "separator";
      orientation: "horizontal" | "vertical";
      complete: "";
      current: "";
      incomplete: "";
    };
    content: {
      scope: "steps";
      part: "content";
      state: "open" | "closed";
      orientation: "horizontal" | "vertical";
    };
    progress: {
      scope: "steps";
      part: "progress";
      complete: "";
    };
  }
>;
