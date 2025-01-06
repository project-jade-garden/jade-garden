import { type TimerSlots, createTimerSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 *
 * @returns
 * ```js
 * {
 *   base: "timer",
 *   root: "timer__root",
 *   area: "timer__area",
 *   control: "timer__control",
 *   item: "timer__item",
 *   itemValue: "timer__item-value",
 *   itemLabel: "timer__item-label",
 *   actionTrigger: "timer__action-trigger",
 *   separator: "timer__separator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const timerSlots = createTimerSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("timer", timerSlots));

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 *
 * @example
 * ```css
 * .timer { }
 *
 * .timer__root { }
 *
 * .timer__area { }
 *
 * .timer__control { }
 *
 * .timer__item { }
 *
 * .timer__item-value { }
 *
 * .timer__item-label { }
 *
 * .timer__action-trigger { }
 *
 * .timer__separator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const timerStyledSlots = {
  base: "timer",
  root: "timer__root",
  area: "timer__area",
  control: "timer__control",
  item: "timer__item",
  itemValue: "timer__item-value",
  itemLabel: "timer__item-label",
  actionTrigger: "timer__action-trigger",
  separator: "timer__separator"
} as const satisfies Record<TimerSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("timer", timerStyledSlots));
