// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/timer.demo.tsx
import { type TimerSlots, createTimerSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 *
 * @returns
 * ```js
 * {
 *   base: "parkTimer",
 *   root: "parkTimer__root",
 *   area: "parkTimer__area",
 *   control: "parkTimer__control",
 *   item: "parkTimer__item",
 *   itemValue: "parkTimer__itemValue",
 *   itemLabel: "parkTimer__itemLabel",
 *   actionTrigger: "parkTimer__actionTrigger",
 *   separator: "parkTimer__separator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const timerSlots = createTimerSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("timer", timerSlots));

/**
 * **Timer**
 * @description Used to record the time elapsed from zero or since a specified target time.
 *
 * @example
 * ```css
 * .parkTimer { }
 *
 * .parkTimer__root { }
 *
 * .parkTimer__area { }
 *
 * .parkTimer__control { }
 *
 * .parkTimer__item { }
 *
 * .parkTimer__itemValue { }
 *
 * .parkTimer__itemLabel { }
 *
 * .parkTimer__actionTrigger { }
 *
 * .parkTimer__separator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/timer#anatomy)
 */
export const timerStyledSlots = {
  /** @result `"timer"`*/
  base: timerSlots.base,

  /** @result `"timer__root"`*/
  root: timerSlots.root,

  /** @result `"timer__area"`*/
  area: timerSlots.area,

  /** @result `"timer__control"`*/
  control: timerSlots.control,

  /** @result `"timer__item"`*/
  item: timerSlots.item,

  /** @result `"timer__itemValue"`*/
  itemValue: timerSlots.itemValue,

  /** @result `"timer__itemLabel"`*/
  itemLabel: timerSlots.itemLabel,

  /** @result `"timer__actionTrigger"`*/
  actionTrigger: timerSlots.actionTrigger,

  /** @result `"timer__separator"`*/
  separator: timerSlots.separator
} as const satisfies Record<TimerSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("timer", timerStyledSlots));
