import { type Slots, createSlots } from "@spark-css/core/timer";

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
export const timerSlots = createSlots({});

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
} as const satisfies Record<Slots, string | string[]>;
