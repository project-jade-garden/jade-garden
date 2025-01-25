// * https://github.com/chakra-ui/ark/blob/main/website/src/demos/steps.demo.tsx
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/steps";

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
export const stepsSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", stepsSlots);

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
export const stepsStyledSlots = {
  base: "parkSteps",
  root: "parkSteps__root",
  list: "parkSteps__list",
  item: "parkSteps__item",
  trigger: "parkSteps__trigger",
  indicator: "parkSteps__indicator",
  separator: "parkSteps__separator",
  content: "parkSteps__content",
  nextTrigger: "parkSteps__nextTrigger",
  prevTrigger: "parkSteps__prevTrigger",
  progress: "parkSteps__progress"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", stepsStyledSlots);
