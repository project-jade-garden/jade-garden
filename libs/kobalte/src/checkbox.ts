// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/checkbox/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://kobalte.dev/docs/core/components/checkbox#anatomy)
 */
export const slots = ["control", "description", "errorMessage", "indicator", "input", "label"] as const;

/**
 * **Checkbox**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://kobalte.dev/docs/core/components/checkbox#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
