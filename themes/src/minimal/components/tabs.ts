import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/tabs";

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
export const tabsSlots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", tabsSlots);

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
export const tabsStyledSlots = {
  base: "tabs",
  root: "tabs__root",
  list: "tabs__list",
  trigger: "tabs__trigger",
  content: "tabs__content",
  indicator: "tabs__indicator"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", tabsStyledSlots);
