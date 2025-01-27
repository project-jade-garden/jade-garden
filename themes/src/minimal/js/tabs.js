import { createSlots } from "@spark-css/core/tabs";
/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 *
 * @returns
 * ```js
 * {
 *   base: "tabs",
 *   root: "tabs__root",
 *   list: "tabs__list",
 *   trigger: "tabs__trigger",
 *   content: "tabs__content",
 *   indicator: "tabs__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/tabs").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  list: slots.list,
  trigger: slots.trigger,
  content: slots.content,
  indicator: slots.indicator
};
/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 *
 * @example
 * ```css
 * .tabs { }
 *
 * .tabs__root { }
 *
 * .tabs__list { }
 *
 * .tabs__trigger { }
 *
 * .tabs__content { }
 *
 * .tabs__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const tabsStyles = styledSlots;
