import {
  type TabsSlots,
  // createTabsDocs,
  createTabsSlots
} from "@spark-css/core";

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
export const tabsSlots = createTabsSlots({});

// * Uncomment before styling slots
// createTabsDocs("anatomy", tabsSlots);

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
} as const satisfies Record<TabsSlots, string | string[]>;

// * Uncomment after styling slots
// createTabsDocs("styled", tabsStyledSlots);
