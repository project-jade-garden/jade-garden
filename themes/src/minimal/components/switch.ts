import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/switch";

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
export const switchSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", switchSlots);

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
export const switchStyledSlots = {
  base: "switch",
  root: "switch__root",
  label: "switch__label",
  control: "switch__control",
  thumb: "switch__thumb"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", switchStyledSlots);
