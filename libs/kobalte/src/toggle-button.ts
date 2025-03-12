// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/toggle-button/index.tsx
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle Button**
 * @description A two-state button that can be either on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-button#anatomy)
 */
export const slots = ["root"];

/**
 * **Toggle Button**
 * @description A two-state button that can be either on (pressed) or off (not pressed).
 * @see [source](https://kobalte.dev/docs/core/components/toggle-button#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
