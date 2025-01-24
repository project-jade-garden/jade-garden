// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/tabs.ts
import {
  type TabsSlots,
  // createTabsDocs,
  createTabsSlots
} from "@spark-css/core/tabs";

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 *
 * @returns
 * ```js
 * {
 *   base: "parkTabs",
 *   root: "parkTabs__root",
 *   list: "parkTabs__list",
 *   trigger: "parkTabs__trigger",
 *   content: "parkTabs__content",
 *   indicator: "parkTabs__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const tabsSlots = createTabsSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createTabsDocs("anatomy", tabsSlots);

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 *
 * @example
 * ```css
 * .parkTabs { }
 *
 * .parkTabs__root {
 *   (@)apply w-full flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row;
 * }
 *
 * .parkTabs__list {
 *   (@)apply flex overflow-auto relative [&::-webkit-scrollbar]:hidden shrink-0 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col [scrollbar-width:none];
 * }
 *
 * .parkTabs__trigger {
 *   (@)apply cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed inline-flex z-[1] gap-2 items-center justify-center data-[orientation=vertical]:justify-start shrink-0 text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled [&:is([aria-selected=true],_[data-selected])]:text-fg-default font-semibold whitespace-nowrap transition-[color,_background,_border-color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkTabs__content { }
 *
 * .parkTabs__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const tabsStyledSlots = {
  base: "parkTabs",
  root: [
    "parkTabs__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "data-[orientation=horizontal]:flex-col",
    "data-[orientation=vertical]:flex-row"
  ],
  list: [
    "parkTabs__list",

    // Layout
    "flex",
    "overflow-auto",
    "relative",
    "[&::-webkit-scrollbar]:hidden",

    // Flexbox & Grid
    "shrink-0",
    "data-[orientation=horizontal]:flex-row",
    "data-[orientation=vertical]:flex-col",

    // Custom Modifier
    "[scrollbar-width:none]"
  ],
  trigger: [
    "parkTabs__trigger",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "inline-flex",
    "z-[1]",

    // Flexbox & Grid
    "gap-2",
    "items-center",
    "justify-center",
    "data-[orientation=vertical]:justify-start",
    "shrink-0",

    // Typography
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "[&:is([aria-selected=true],_[data-selected])]:text-fg-default",
    "font-semibold",
    "whitespace-nowrap",

    // Transitions & Animation
    "transition-[color,_background,_border-color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  content: "parkTabs__content",
  indicator: "parkTabs__indicator"
} as const satisfies Record<TabsSlots, string | string[]>;

// * Uncomment after styling slots
// createTabsDocs("styled", tabsStyledSlots);
