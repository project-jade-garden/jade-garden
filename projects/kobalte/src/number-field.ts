// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/number-field/index.tsx

/**
 * **Number Field**
 * @description A number input that allow users to input custom number entries with a keyboard.
 * @see [source](https://kobalte.dev/docs/core/components/number-field#anatomy)
 */
export const slots = [
  "root",
  "description",
  "errorMessage",
  "hiddenInput",
  "input",
  "incrementTrigger",
  "decrementTrigger",
  "label"
] as const;

/**
 * **Number Field**
 * @description A number input that allow users to input custom number entries with a keyboard.
 * @see [source](https://kobalte.dev/docs/core/components/number-field#anatomy)
 */
export type Slots = (typeof slots)[number];
