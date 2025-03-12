// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-channel-field/index.tsx
import type { ClassValue } from "tailwind-variants";

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

export type TVSlots = Record<Slots, ClassValue>;
