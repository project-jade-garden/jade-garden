import { createSlots } from "@spark-css/core/toggle-group";
/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "toggle-group",
 *   root: "toggle-group__root",
 *   item: "toggle-group__item"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/toggle-group").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: slots.root,
    item: slots.item
};
/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 *
 * @example
 * ```css
 * .toggle-group { }
 *
 * .toggle-group__root { }
 *
 * .toggle-group__item { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export const toggleGroup = styledSlots;
