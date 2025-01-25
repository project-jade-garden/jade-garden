// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/select.ts
import { type Slots, createSlots } from "@spark-css/core/select";

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSelect",
 *   label: "parkSelect__label",
 *   positioner: "parkSelect__positioner",
 *   trigger: "parkSelect__trigger",
 *   indicator: "parkSelect__indicator",
 *   clearTrigger: "parkSelect__clearTrigger",
 *   item: "parkSelect__item",
 *   itemText: "parkSelect__itemText",
 *   itemIndicator: "parkSelect__itemIndicator",
 *   itemGroup: "parkSelect__itemGroup",
 *   itemGroupLabel: "parkSelect__itemGroupLabel",
 *   list: "parkSelect__list",
 *   content: "parkSelect__content",
 *   root: "parkSelect__root",
 *   control: "parkSelect__control",
 *   valueText: "parkSelect__valueText"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/select").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "parkSelect",
  label: [
    "parkSelect__label",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  positioner: [
    "parkSelect__positioner",

    // Sizing
    "w-full",

    // Borders
    "rounded-l2",
    "border-border-default",

    // Interactivity
    "appearance-none",
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "inline-flex",
    "relative",
    "outline-0",

    // Flexbox & Grid
    "items-center",
    "justify-between",

    // Typography
    "text-fg-default",
    "[&_:where(svg)]:text-fg-subtle",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "[&:is(:disabled,_[disabled],_[data-disabled])_:where(svg)]:text-fg-disabled",
    "[&:is(:placeholder-shown,_[data-placeholder-shown])]:text-fg-subtle",

    // Transitions & Animation
    "transition-[background,_box-shadow,_border-color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  trigger: "parkSelect__trigger",
  indicator: "parkSelect__indicator",
  clearTrigger: "parkSelect__clearTrigger",
  item: [
    "parkSelect__item",

    // Backgrounds
    "bg-[--colors-gray-a3]",

    // Borders
    "rounded-l1",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center",
    "justify-between",

    // Typography
    "data-[highlighted]:text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "[&:is([aria-selected=true],_[data-selected])]:text-fg-subtle",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-150",
    "ease-[--easings-default]"
  ],
  itemText: "parkSelect__itemText",
  itemIndicator: [
    "parkSelect__itemIndicator",

    // Typography
    "text-[--colors-color-palette-default]"
  ],
  itemGroup: "parkSelect__itemGroup",
  itemGroupLabel: [
    "parkSelect__itemGroupLabel",

    // Typography
    "text-sm",
    "font-semibold"
  ],
  list: "parkSelect__list",
  content: [
    "parkSelect__content",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline",

    // Effects
    "shadow-lg",

    // Layout
    "flex",
    "[&:is([hidden])]:hidden",
    "z-[--z-index-dropdown]",

    // Flexbox & Grid
    "flex-col",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
  ],
  root: [
    "parkSelect__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  control: "parkSelect__control",
  valueText: "parkSelect__valueText"
} satisfies Record<Slots, string | string[]>;

/**
 * **Select**
 * @description Displays a list of options for the user to pick from.
 *
 * @example
 * ```css
 * .parkSelect { }
 *
 * .parkSelect__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkSelect__positioner {
 *   (@)apply w-full rounded-l2 border-border-default appearance-none cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed inline-flex relative outline-0 items-center justify-between text-fg-default [&_:where(svg)]:text-fg-subtle [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled [&:is(:disabled,_[disabled],_[data-disabled])_:where(svg)]:text-fg-disabled [&:is(:placeholder-shown,_[data-placeholder-shown])]:text-fg-subtle transition-[background,_box-shadow,_border-color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkSelect__trigger { }
 *
 * .parkSelect__indicator { }
 *
 * .parkSelect__clearTrigger { }
 *
 * .parkSelect__item {
 *   (@)apply bg-[--colors-gray-a3] rounded-l1 cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex items-center justify-between data-[highlighted]:text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled [&:is([aria-selected=true],_[data-selected])]:text-fg-subtle transition-[background,_color] duration-150 ease-[--easings-default];
 * }
 *
 * .parkSelect__itemText { }
 *
 * .parkSelect__itemIndicator {
 *   (@)apply text-[--colors-color-palette-default];
 * }
 *
 * .parkSelect__itemGroup { }
 *
 * .parkSelect__itemGroupLabel {
 *   (@)apply text-sm font-semibold;
 * }
 *
 * .parkSelect__list { }
 *
 * .parkSelect__content {
 *   (@)apply bg-bg-default rounded-l2 [&:is(:focus-visible,_[data-focus-visible])]:outline [&:is(:focus-visible,_[data-focus-visible])]:outline-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline shadow-lg flex [&:is([hidden])]:hidden z-[--z-index-dropdown] flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkSelect__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkSelect__control { }
 *
 * .parkSelect__valueText { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/select#anatomy)
 */
export const select = styledSlots;
