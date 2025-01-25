// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/field.ts
import { type Slots, createSlots } from "@spark-css/core/field";

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 *
 * @returns
 * ```js
 * {
 *   base: "parkField",
 *   root: "parkField__root",
 *   errorText: "parkField__errorText",
 *   helperText: "parkField__helperText",
 *   input: "parkField__input",
 *   label: "parkField__label",
 *   select: "parkField__select",
 *   textarea: "parkField__textarea",
 *   requiredIndicator: "parkField__requiredIndicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

const styledSlots = {
  base: "parkField",
  root: [
    "parkField__root",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  errorText: [
    "parkField__errorText",

    // Layout
    "inline-flex",

    // Flexbox & Grid
    "gap-2",
    "items-center",

    // Typography
    "text-fg-error",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "text-sm"
  ],
  helperText: [
    "parkField__helperText",

    // Typography
    "text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "text-sm"
  ],
  input: "parkField__input",
  label: [
    "parkField__label",

    // Typography
    "text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "text-sm",
    "font-medium"
  ],
  select: "parkField__select",
  textarea: "parkField__textarea",
  requiredIndicator: "parkField__requiredIndicator"
} satisfies Record<Slots, string | string[]>;

/**
 * **Field**
 * @description Provides a flexible container for form inputs, labels, and helper text.
 *
 * @example
 * ```css
 * .parkField { }
 *
 * .parkField__root {
 *   (@)apply flex gap-1.5 flex-col;
 * }
 *
 * .parkField__errorText {
 *   (@)apply inline-flex gap-2 items-center text-fg-error [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled text-sm;
 * }
 *
 * .parkField__helperText {
 *   (@)apply text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled text-sm;
 * }
 *
 * .parkField__input { }
 *
 * .parkField__label {
 *   (@)apply text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled text-sm font-medium;
 * }
 *
 * .parkField__select { }
 *
 * .parkField__textarea { }
 *
 * .parkField__requiredIndicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/field#anatomy)
 */
export const field = styledSlots;
