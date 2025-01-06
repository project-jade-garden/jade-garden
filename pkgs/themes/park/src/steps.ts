// * https://github.com/chakra-ui/ark/blob/main/website/src/demos/steps.demo.tsx
import { type StepsSlots, createStepsSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const stepsSlots = createStepsSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("steps", stepsSlots));

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
  /** @result `"steps"`*/
  base: stepsSlots.base,

  /** @result `"steps__root"`*/
  root: stepsSlots.root,

  /** @result `"steps__list"`*/
  list: stepsSlots.list,

  /** @result `"steps__item"`*/
  item: stepsSlots.item,

  /** @result `"steps__trigger"`*/
  trigger: stepsSlots.trigger,

  /** @result `"steps__indicator"`*/
  indicator: stepsSlots.indicator,

  /** @result `"steps__separator"`*/
  separator: stepsSlots.separator,

  /** @result `"steps__content"`*/
  content: stepsSlots.content,

  /** @result `"steps__nextTrigger"`*/
  nextTrigger: stepsSlots.nextTrigger,

  /** @result `"steps__prevTrigger"`*/
  prevTrigger: stepsSlots.prevTrigger,

  /** @result `"steps__progress"`*/
  progress: stepsSlots.progress
} as const satisfies Record<StepsSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("steps", stepsStyledSlots));
