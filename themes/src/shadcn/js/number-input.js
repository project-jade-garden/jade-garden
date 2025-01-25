// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/number-input.ts
import { createSlots } from "@spark-css/core/number-input";
/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 *
 * @returns
 * ```js
 * {
 *   base: "parkNumberInput",
 *   root: "parkNumberInput__root",
 *   label: "parkNumberInput__label",
 *   input: "parkNumberInput__input",
 *   control: "parkNumberInput__control",
 *   valueText: "parkNumberInput__valueText",
 *   incrementTrigger: "parkNumberInput__incrementTrigger",
 *   decrementTrigger: "parkNumberInput__decrementTrigger",
 *   scrubber: "parkNumberInput__scrubber"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/number-input").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Layout
    "flex",
    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  label: [
    slots.label,
    // Typography
    "text-fg-default",
    "font-medium"
  ],
  input: [
    slots.input,
    // Sizing
    "w-full",
    // Backgrounds
    "bg-transparent",
    // Borders
    "border-none",
    // Interactivity
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",
    // Layout
    "outline-none",
    // Flexbox & Grid
    "row-span-2"
  ],
  control: [
    slots.control,
    // Borders
    "border",
    "rounded-l2",
    "border-border-default",
    "[&_>_:not([hidden])_~_:not([hidden])]:border-l",
    "[&_>_:not([hidden])_~_:not([hidden])]:border-r-0",
    "focus-within:border-[--colors-color-palette-default]",
    // Effects
    "[&:is(:disabled,_[disabled],_[data-disabled])]:opacity-40",
    "focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default]",
    // Interactivity
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",
    // Layout
    "grid",
    "overflow-hidden",
    // Flexbox & Grid
    "grid-cols-[1fr_32px]",
    "grid-rows-[1fr_1fr]",
    // Transitions & Animation
    "transition-[border-color,_box-shadow]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  valueText: slots.valueText,
  incrementTrigger: [
    slots.incrementTrigger,
    // Sizing
    "[&_:where(svg)]:size-4",
    // Borders
    "border-border-default",
    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",
    // Layout
    "inline-flex",
    // Flexbox & Grid
    "items-center",
    "justify-center",
    // Typography
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    // Transitions & Animation
    "transition-property:background,_border-color,_color,_box-shadow]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  decrementTrigger: [
    slots.decrementTrigger,
    // Sizing
    "[&_:where(svg)]:size-4",
    // Borders
    "border-t",
    "border-border-default",
    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",
    // Layout
    "inline-flex",
    // Flexbox & Grid
    "items-center",
    "justify-center",
    // Typography
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    // Transitions & Animation
    "transition-property:background,_border-color,_color,_box-shadow]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  scrubber: slots.scrubber
};
/**
 * **Number Input**
 * @description A field that allows user input of numeric values.
 *
 * @example
 * ```css
 * .parkNumberInput { }
 *
 * .parkNumberInput__root {
 *   (@)apply flex gap-1.5 flex-col;
 * }
 *
 * .parkNumberInput__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkNumberInput__input {
 *   (@)apply w-full bg-transparent border-none [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed outline-none row-span-2;
 * }
 *
 * .parkNumberInput__control {
 *   (@)apply border rounded-l2 border-border-default [&_>_:not([hidden])_~_:not([hidden])]:border-l [&_>_:not([hidden])_~_:not([hidden])]:border-r-0 focus-within:border-[--colors-color-palette-default] [&:is(:disabled,_[disabled],_[data-disabled])]:opacity-40 focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default] [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed grid overflow-hidden grid-cols-[1fr_32px] grid-rows-[1fr_1fr] transition-[border-color,_box-shadow] duration-200 ease-[--easings-default];
 * }
 *
 * .parkNumberInput__valueText { }
 *
 * .parkNumberInput__incrementTrigger {
 *   (@)apply [&_:where(svg)]:size-4 border-border-default cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed inline-flex items-center justify-center text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled transition-property:background,_border-color,_color,_box-shadow] duration-200 ease-[--easings-default];
 * }
 *
 * .parkNumberInput__decrementTrigger {
 *   (@)apply [&_:where(svg)]:size-4 border-t border-border-default cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed inline-flex items-center justify-center text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled transition-property:background,_border-color,_color,_box-shadow] duration-200 ease-[--easings-default];
 * }
 *
 * .parkNumberInput__scrubber { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/number-input#anatomy)
 */
export const numberInput = styledSlots;
