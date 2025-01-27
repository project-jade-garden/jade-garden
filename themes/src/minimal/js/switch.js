import { createSlots } from "@spark-css/core/switch";
/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 *
 * @returns
 * ```js
 * {
 *   base: "switch",
 *   root: "switch__root",
 *   label: "switch__label",
 *   control: "switch__control",
 *   thumb: "switch__thumb"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/switch").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  control: slots.control,
  thumb: slots.thumb
};
/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 *
 * @example
 * ```css
 * .switch { }
 *
 * .switch__root { }
 *
 * .switch__label { }
 *
 * .switch__control { }
 *
 * .switch__thumb { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export const switchStyles = styledSlots;
