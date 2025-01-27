import { type Slots, createSlots } from "@spark-css/core/toggle";

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "toggle",
 *   root: "toggle__root",
 *   indicator: "toggle__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/toggle").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  indicator: slots.indicator
} satisfies Record<Slots, string | string[]>;

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @example
 * ```css
 * .toggle { }
 *
 * .toggle__root { }
 *
 * .toggle__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleStyles = styledSlots;
