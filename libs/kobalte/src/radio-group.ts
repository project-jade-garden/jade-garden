// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/radio-group/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Radio Group**
 * @description A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.
 * @see [source](https://kobalte.dev/docs/core/components/radio-group#anatomy)
 */
export const slots = [
  "description",
  "errorMessage",
  "item",
  "itemControl",
  "itemDescription",
  "itemIndicator",
  "itemInput",
  "itemLabel",
  "label"
] as const;

/**
 * **Radio Group**
 * @description A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.
 * @see [source](https://kobalte.dev/docs/core/components/radio-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time.
 * @see [source](https://kobalte.dev/docs/core/components/radio-group#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
