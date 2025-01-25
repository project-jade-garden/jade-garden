// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/tags-input.ts
import { type Slots, createSlots } from "@spark-css/core/tags-input";

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 *
 * @returns
 * ```js
 * {
 *   base: "parkTagsInput",
 *   root: "parkTagsInput__root",
 *   label: "parkTagsInput__label",
 *   control: "parkTagsInput__control",
 *   input: "parkTagsInput__input",
 *   clearTrigger: "parkTagsInput__clearTrigger",
 *   item: "parkTagsInput__item",
 *   itemPreview: "parkTagsInput__itemPreview",
 *   itemInput: "parkTagsInput__itemInput",
 *   itemText: "parkTagsInput__itemText",
 *   itemDeleteTrigger: "parkTagsInput__itemDeleteTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/tags-input").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "parkTagsInput",
  root: [
    "parkTagsInput__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  label: [
    "parkTagsInput__label",

    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  control: [
    "parkTagsInput__control",

    // Borders
    "rounded-l2",
    "border",
    "border-border-default",
    "focus-within:border-[--colors-color-palette-default]",

    // Effects
    "focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)]",

    // Layout
    "flex",
    "outline-0",

    // Flexbox & Grid
    "items-center",
    "flex-wrap",

    // Transitions & Animation
    "transition-[border-color,_box-shadow]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  input: [
    "parkTagsInput__input",

    // Backgrounds
    "bg-transparent",

    // Borders
    "outline-none",

    // Typography
    "text-fg-default"
  ],
  clearTrigger: "parkTagsInput__clearTrigger",
  item: "parkTagsInput__item",
  itemPreview: [
    "parkTagsInput__itemPreview",

    // Borders
    "rounded-l1",
    "border",
    "border-border-default",
    "data-[highlighted]:border-[--colors-color-palette-default]",

    // Effects
    "data-[highlighted]:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)]",

    // Layout
    "inline-flex",
    "[&:is([hidden])]:hidden",

    // Flexbox & Grid
    "items-center",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  itemInput: [
    "parkTagsInput__itemInput",

    // Backgrounds
    "bg-transparent",

    // Borders
    "outline-none",

    // Typography
    "text-fg-default"
  ],
  itemText: "parkTagsInput__itemText",
  itemDeleteTrigger: "parkTagsInput__itemDeleteTrigger"
} satisfies Record<Slots, string | string[]>;

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 *
 * @example
 * ```css
 * .parkTagsInput { }
 *
 * .parkTagsInput__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkTagsInput__label {
 *   (@)apply text-fg-default text-sm font-medium;
 * }
 *
 * .parkTagsInput__control {
 *   (@)apply rounded-l2 border border-border-default focus-within:border-[--colors-color-palette-default] focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)] flex outline-0 items-center flex-wrap transition-[border-color,_box-shadow] duration-200 ease-[--easings-default];
 * }
 *
 * .parkTagsInput__input {
 *   (@)apply bg-transparent outline-none text-fg-default;
 * }
 *
 * .parkTagsInput__clearTrigger { }
 *
 * .parkTagsInput__item { }
 *
 * .parkTagsInput__itemPreview {
 *   (@)apply rounded-l1 border border-border-default data-[highlighted]:border-[--colors-color-palette-default] data-[highlighted]:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)] inline-flex [&:is([hidden])]:hidden items-center text-fg-default font-medium;
 * }
 *
 * .parkTagsInput__itemInput {
 *   (@)apply bg-transparent outline-none text-fg-default;
 * }
 *
 * .parkTagsInput__itemText { }
 *
 * .parkTagsInput__itemDeleteTrigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export const tagsInput = styledSlots;
