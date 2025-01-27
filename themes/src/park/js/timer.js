// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/timer.demo.tsx
import { createSlots } from "@spark-css/core/timer";
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
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/timer").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  area: slots.area,
  control: slots.control,
  item: slots.item,
  itemValue: slots.itemValue,
  itemLabel: slots.itemLabel,
  actionTrigger: slots.actionTrigger,
  separator: slots.separator
};
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
export const timerStyles = styledSlots;
