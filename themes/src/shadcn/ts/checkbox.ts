// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/checkbox.ts
import { type Slots, createSlots } from "@spark-css/core/checkbox";

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @returns
 * ```js
 * {
 *   base: "parkCheckbox",
 *   root: "parkCheckbox__root",
 *   label: "parkCheckbox__label",
 *   control: "parkCheckbox__control",
 *   indicator: "parkCheckbox__indicator",
 *   group: "parkCheckbox__group"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/checkbox").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center"
  ],
  label: [
    slots.label,

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  control: [
    slots.control,

    // Backgrounds
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default]",
    "[&:is(:indeterminate, [data-indeterminate],_[aria-checked=mixed],_[data-state=indeterminate])]:bg-[--colors-color-palette-default]",

    // Borders
    "border",
    "border-border-default",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:border-[--colors-color-palette-default]",
    "[&:is(:indeterminate, [data-indeterminate],_[aria-checked=mixed],_[data-state=indeterminate])]:border-[--colors-color-palette-default]",
    "has-[+_:focus-visible]:outline",
    "has-[+_:focus-visible]:outline-2",
    "has-[+_:focus-visible]:outline-offset-2",
    "has-[+_:focus-visible]:outline-border-outline",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:has-[+_:focus-visible]:outline-[--colors-color-palette-default]",

    // Interactivity
    "cursor-pointer",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center",
    "justify-center",

    // Typography
    "text-color-palette-fg",

    // Transitions & Animation
    "transition-[border-color,_background]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  indicator: slots.indicator,
  group: slots.group
} satisfies Record<Slots, string | string[]>;

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @example
 * ```css
 * .parkCheckbox { }
 *
 * .parkCheckbox__root {
 *   (@)apply flex items-center;
 * }
 *
 * .parkCheckbox__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkCheckbox__control {
 *   (@)apply [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default] [&:is(:indeterminate, [data-indeterminate],_[aria-checked=mixed],_[data-state=indeterminate])]:bg-[--colors-color-palette-default] border border-border-default [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:border-[--colors-color-palette-default] [&:is(:indeterminate, [data-indeterminate],_[aria-checked=mixed],_[data-state=indeterminate])]:border-[--colors-color-palette-default] has-[+_:focus-visible]:outline has-[+_:focus-visible]:outline-2 has-[+_:focus-visible]:outline-offset-2 has-[+_:focus-visible]:outline-border-outline [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:has-[+_:focus-visible]:outline-[--colors-color-palette-default] cursor-pointer flex items-center justify-center text-color-palette-fg transition-[border-color,_background] duration-200 ease-[--easings-default];
 * }
 *
 * .parkCheckbox__indicator { }
 *
 * .parkCheckbox__group { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const checkbox = styledSlots;
