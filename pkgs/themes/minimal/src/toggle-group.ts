import { type ToggleGroupSlots, createToggleGroupSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const toggleGroupSlots = createToggleGroupSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("toggle-group", toggleGroupSlots));

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
export const toggleGroupStyledSlots = {
  base: "toggle-group",
  root: "toggle-group__root",
  item: "toggle-group__item"
} as const satisfies Record<ToggleGroupSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("toggle-group", toggleGroupStyledSlots));
