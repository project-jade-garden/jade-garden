// * https://github.com/radix-ui/primitives/blob/main/packages/react/toggle/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle#anatomy)
 */
export const slots = ["root"];

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle**
 * @description A two-state button that can be either on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
