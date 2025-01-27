// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/fieldset.ts
import { type Slots, createSlots } from "@spark-css/core/fieldset";

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 *
 * @returns
 * ```js
 * {
 *   base: "parkFieldset",
 *   root: "parkFieldset__root",
 *   errorText: "parkFieldset__errorText",
 *   helperText: "parkFieldset__helperText",
 *   legend: "parkFieldset__legend"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */

const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef { import("@spark-css/core/fieldset").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,

    // Sizing
    "w-full",

    // Borders
    "border-t",

    // Layout
    "grid",

    // Flexbox & Grid
    "gap-x-8",
    "gap-y-1.5",
    "grid-rows-[auto_1fr]",
    "grid-cols-[1fr_auto]",
    "[grid-template-areas:'legend_legend'_'helperText_helperText'_'control_control'_'errorText_errorText']",
    "md:[grid-template-areas:'legend_control'_'helperText_control'_'errorText_errorText']"
  ],
  errorText: [
    slots.errorText,

    // Spacing
    "mt-4",

    // Borders
    "border-t",

    // Layout
    "inline-flex",

    // Flexbox & Grid
    "gap-2",
    "items-center",
    "[grid-area:errorText]",

    // Typography
    "text-sm",
    "text-fg-error",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled"
  ],
  helperText: [
    slots.helperText,

    // Flexbox & Grid
    "[grid-area:helperText]",

    // Typography
    "text-sm",
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled"
  ],
  legend: [
    slots.legend,

    // Layout
    "float-left",
    "clear-both",

    // Flexbox & Grid
    "[grid-area:legend]",

    // Typography
    "text-sm",
    "font-medium",
    "text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled"
  ]
} satisfies Record<Slots, string | string[]>;

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 *
 * @example
 * ```css
 * .parkFieldset { }
 *
 * .parkFieldset__root {
 *   (@)apply w-full border-t grid gap-x-8 gap-y-1.5 grid-rows-[auto_1fr] grid-cols-[1fr_auto] [grid-template-areas:'legend_legend'_'helperText_helperText'_'control_control'_'errorText_errorText'] md:[grid-template-areas:'legend_control'_'helperText_control'_'errorText_errorText'];
 * }
 *
 * .parkFieldset__errorText {
 *   (@)apply mt-4 border-t inline-flex gap-2 items-center [grid-area:errorText] text-sm text-fg-error [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled;
 * }
 *
 * .parkFieldset__helperText {
 *   (@)apply [grid-area:helperText] text-sm text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled;
 * }
 *
 * .parkFieldset__legend {
 *   (@)apply float-left clear-both [grid-area:legend] text-sm font-medium text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export const fieldsetStyles = styledSlots;
