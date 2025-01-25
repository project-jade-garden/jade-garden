import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/toggle-group";

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
export const toggleGroupSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", toggleGroupSlots);

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
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", toggleGroupStyledSlots);
