// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/switch/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Switch**
 * @description A control that allows users to choose one of two values: on or off.
 * @see [source](https://kobalte.dev/docs/core/components/switch#anatomy)
 */
export const slots = ["control", "description", "errorMessage", "input", "label", "thumb"] as const;

/**
 * **Switch**
 * @description A control that allows users to choose one of two values: on or off.
 * @see [source](https://kobalte.dev/docs/core/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
