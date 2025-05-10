// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-channel-field/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Color Channel Field**
 * @description A number input that allow users to edit individual color channel value.
 * @see [source](https://kobalte.dev/docs/core/components/color-channel-field#anatomy)
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
 * **Color Channel Field**
 * @description A number input that allow users to edit individual color channel value.
 * @see [source](https://kobalte.dev/docs/core/components/color-channel-field#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Color Channel Field**
 * @description A number input that allow users to edit individual color channel value.
 * @see [source](https://kobalte.dev/docs/core/components/color-channel-field#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {};
    description: {};
    errorMessage: {};
    hiddenInput: {};
    input: {};
    incrementTrigger: {};
    decrementTrigger: {};
    label: {};
  }
>;
