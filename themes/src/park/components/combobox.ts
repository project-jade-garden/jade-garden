// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/combobox.ts
import { type Slots, createSlots } from "@spark-css/core/combobox";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @returns
 * ```js
 * {
 *   base: "parkCombobox",
 *   root: "parkCombobox__root",
 *   clearTrigger: "parkCombobox__clearTrigger",
 *   content: "parkCombobox__content",
 *   control: "parkCombobox__control",
 *   input: "parkCombobox__input",
 *   item: "parkCombobox__item",
 *   itemGroup: "parkCombobox__itemGroup",
 *   itemGroupLabel: "parkCombobox__itemGroupLabel",
 *   itemIndicator: "parkCombobox__itemIndicator",
 *   itemText: "parkCombobox__itemText",
 *   label: "parkCombobox__label",
 *   list: "parkCombobox__list",
 *   positioner: "parkCombobox__positioner",
 *   trigger: "parkCombobox__trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const comboboxSlots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @example
 * ```css
 * .parkCombobox { }
 *
 * .parkCombobox__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkCombobox__clearTrigger { }
 *
 * .parkCombobox__content {
 *   (@)apply bg-bg-default rounded-l2 [&:is(:focus-visible,_[data-focus-visible])]:outline [&:is(:focus-visible,_[data-focus-visible])]:outline-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline shadow-lg flex [&:is([hidden])]:hidden z-[--z-index-dropdown] flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkCombobox__control {
 *   (@)apply relative;
 * }
 *
 * .parkCombobox__input { }
 *
 * .parkCombobox__item {
 *   (@)apply data-[highlighted]:bg-bg-muted rounded-l1 cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex items-center justify-between [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled transition-[background,_color] duration-200 ease-[--easings-default];
 * }
 *
 * .parkCombobox__itemGroup { }
 *
 * .parkCombobox__itemGroupLabel {
 *   (@)apply text-sm font-semibold;
 * }
 *
 * .parkCombobox__itemIndicator {
 *   (@)apply text-[--colors-color-palette-default];
 * }
 *
 * .parkCombobox__itemText { }
 *
 * .parkCombobox__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkCombobox__list { }
 *
 * .parkCombobox__positioner { }
 *
 * .parkCombobox__trigger {
 *   (@)apply absolute inset-y-0 right-0 text-fg-muted;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const comboboxStyledSlots = {
  base: "parkCombobox",
  root: [
    "parkCombobox__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  clearTrigger: "parkCombobox__clearTrigger",
  content: [
    "parkCombobox__content",

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
  control: [
    "parkCombobox__control",

    // Layout
    "relative"
  ],
  input: "parkCombobox__input",
  item: [
    "parkCombobox__item",

    // Backgrounds
    "data-[highlighted]:bg-bg-muted",

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
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  itemGroup: "parkCombobox__itemGroup",
  itemGroupLabel: [
    "parkCombobox__itemGroupLabel",

    // Typography
    "text-sm",
    "font-semibold"
  ],
  itemIndicator: [
    "parkCombobox__itemIndicator",

    // Typography
    "text-[--colors-color-palette-default]"
  ],
  itemText: "parkCombobox__itemText",
  label: [
    "parkCombobox__label",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  list: "parkCombobox__list",
  positioner: "parkCombobox__positioner",
  trigger: [
    "parkCombobox__trigger",

    // Layout
    "absolute",
    "inset-y-0",
    "right-0",

    // Typography
    "text-fg-muted"
  ]
} as const satisfies Record<Slots, string | string[]>;
