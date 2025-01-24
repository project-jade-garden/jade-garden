import {
  type SwitchSlots,
  // createSwitchDocs,
  createSwitchSlots
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
export const switchSlots = createSwitchSlots({});

// * Uncomment before styling slots
// createSwitchDocs("anatomy", switchSlots);

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
} as const satisfies Record<SwitchSlots, string | string[]>;

// * Uncomment after styling slots
// createSwitchDocs("styled", switchStyledSlots);
