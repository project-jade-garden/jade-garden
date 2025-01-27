// * https://github.com/chakra-ui/ark/blob/main/website/src/demos/steps.demo.tsx
import { type Slots, createSlots } from "@spark-css/core/steps";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSteps",
 *   root: "parkSteps__root",
 *   list: "parkSteps__list",
 *   item: "parkSteps__item",
 *   trigger: "parkSteps__trigger",
 *   indicator: "parkSteps__indicator",
 *   separator: "parkSteps__separator",
 *   content: "parkSteps__content",
 *   nextTrigger: "parkSteps__nextTrigger",
 *   prevTrigger: "parkSteps__prevTrigger",
 *   progress: "parkSteps__progress"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef { import("@spark-css/core/steps").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  list: slots.list,
  item: slots.item,
  trigger: slots.trigger,
  indicator: slots.indicator,
  separator: slots.separator,
  content: slots.content,
  nextTrigger: slots.nextTrigger,
  prevTrigger: slots.prevTrigger,
  progress: slots.progress
} satisfies Record<Slots, string | string[]>;

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @example
 * ```css
 * .parkSteps { }
 *
 * .parkSteps__root { }
 *
 * .parkSteps__list { }
 *
 * .parkSteps__item { }
 *
 * .parkSteps__trigger { }
 *
 * .parkSteps__indicator { }
 *
 * .parkSteps__separator { }
 *
 * .parkSteps__content { }
 *
 * .parkSteps__nextTrigger { }
 *
 * .parkSteps__prevTrigger { }
 *
 * .parkSteps__progress { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const stepsStyles = styledSlots;
