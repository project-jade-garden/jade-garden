// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/switch.ts
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
 *   base: "parkSwitch",
 *   root: "parkSwitch__root",
 *   label: "parkSwitch__label",
 *   control: "parkSwitch__control",
 *   thumb: "parkSwitch__thumb"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export const switchSlots = createSwitchSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createSwitchDocs("anatomy", switchSlots);

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 *
 * @example
 * ```css
 * .parkSwitch { }
 *
 * .parkSwitch__root {
 *   (@)apply flex relative items-center;
 * }
 *
 * .parkSwitch__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkSwitch__control {
 *   (@)apply bg-bg-emphasized [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default] rounded-full cursor-pointer inline-flex items-center shrink-0 transition-[background] duration-200 ease-[--easings-default];
 * }
 *
 * .parkSwitch__thumb {
 *   (@)apply bg-bg-default [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-bg-default dark:[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-fg] rounded-full shadow-xs [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:translate-x-full transition-[background,_transform] duration-200 ease-[--easings-default];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export const switchStyledSlots = {
  base: "parkSwitch",
  root: [
    "parkSwitch__root",

    // Layout
    "flex",
    "relative",

    // Flexbox & Grid
    "items-center"
  ],
  label: [
    "parkSwitch__label",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  control: [
    "parkSwitch__control",

    // Backgrounds
    "bg-bg-emphasized",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default]",

    // Borders
    "rounded-full",

    // Interactivity
    "cursor-pointer",

    // Layout
    "inline-flex",

    // Flexbox & Grid
    "items-center",
    "shrink-0",

    // Transitions & Animation
    "transition-[background]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  thumb: [
    "parkSwitch__thumb",

    // Backgrounds
    "bg-bg-default",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-bg-default",
    "dark:[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-fg]",

    // Borders
    "rounded-full",

    // Effects
    "shadow-xs",

    // Transforms
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:translate-x-full",

    // Transitions & Animation
    "transition-[background,_transform]",
    "duration-200",
    "ease-[--easings-default]"
  ]
} as const satisfies Record<SwitchSlots, string | string[]>;

// * Uncomment after styling slots
// createSwitchDocs("styled", switchStyledSlots);
