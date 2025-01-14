// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/timer.demo.tsx
import {
  type TimerSlots,
  // createTimerDocs,
  createTimerSlots
} from "@spark-css/core";

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
// createTimerDocs("anatomy", timerSlots);

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
  base: "parkTimer",
  root: "parkTimer__root",
  area: "parkTimer__area",
  control: "parkTimer__control",
  item: "parkTimer__item",
  itemValue: "parkTimer__itemValue",
  itemLabel: "parkTimer__itemLabel",
  actionTrigger: "parkTimer__actionTrigger",
  separator: "parkTimer__separator"
} as const satisfies Record<TimerSlots, string | string[]>;

// * Uncomment after styling slots
// createTimerDocs("styled", timerStyledSlots);
