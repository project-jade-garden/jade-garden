// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/text-field/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Text Field**
 * @description A text input that allow users to input custom text entries with a keyboard.
 * @see [source](https://kobalte.dev/docs/core/components/text-field#anatomy)
 */
export const slots = ["description", "errorMessage", "input", "label", "textArea"] as const;

/**
 * **Text Field**
 * @description A text input that allow users to input custom text entries with a keyboard.
 * @see [source](https://kobalte.dev/docs/core/components/text-field#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
