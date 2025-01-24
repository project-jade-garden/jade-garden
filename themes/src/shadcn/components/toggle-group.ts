// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/toggle-group.ts
import {
  type ToggleGroupSlots,
  // createToggleGroupDocs,
  createToggleGroupSlots
} from "@spark-css/core/toggle-group";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "parkToggleGroup",
 *   root: "parkToggleGroup__root",
 *   item: "parkToggleGroup__item"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export const toggleGroupSlots = createToggleGroupSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createToggleGroupDocs("anatomy", toggleGroupSlots);

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 *
 * @example
 * ```css
 * .parkToggleGroup { }
 *
 * .parkToggleGroup__root {
 *   (@)apply flex overflow-hidden relative data-[orientation=vertical]:flex-col;
 * }
 *
 * .parkToggleGroup__item {
 *   (@)apply min-w-0 [&:is([data-state=on])]:bg-[--colors-gray-a3] [&:is(:disabled,_[disabled],_[data-disabled])]:border-border-disabled appearance-none cursor-pointer select-none [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed inline-flex relative outline-none items-center justify-center text-fg-subtle [&:is([data-state=on])]:text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled font-semibold align-middle whitespace-nowrap transition-[background,_box-shadow,_border-color,_color] duration-200 ease-[--easings-default];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle-group#anatomy)
 */
export const toggleGroupStyledSlots = {
  base: "parkToggleGroup",
  root: [
    "parkToggleGroup__root",

    // Layout
    "flex",
    "overflow-hidden",
    "relative",

    // Flexbox & Grid
    "data-[orientation=vertical]:flex-col"
  ],
  item: [
    "parkToggleGroup__item",

    // Sizing
    "min-w-0",

    // Backgrounds
    "[&:is([data-state=on])]:bg-[--colors-gray-a3]",

    // Borders
    "[&:is(:disabled,_[disabled],_[data-disabled])]:border-border-disabled",

    // Interactivity
    "appearance-none",
    "cursor-pointer",
    "select-none",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "inline-flex",
    "relative",
    "outline-none",

    // Flexbox & Grid
    "items-center",
    "justify-center",

    // Typography
    "text-fg-subtle",
    "[&:is([data-state=on])]:text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "font-semibold",
    "align-middle",
    "whitespace-nowrap",

    // Transitions & Animation
    "transition-[background,_box-shadow,_border-color,_color]",
    "duration-200",
    "ease-[--easings-default]"
  ]
} as const satisfies Record<ToggleGroupSlots, string | string[]>;

// * Uncomment after styling slots
// createToggleGroupDocs("styled", toggleGroupStyledSlots);
