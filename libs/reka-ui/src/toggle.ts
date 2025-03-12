// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toggle/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle#anatomy)
 */
export const slots = ["root"];

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://reka-ui.com/docs/components/toggle#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
