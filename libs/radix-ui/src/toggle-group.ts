// * https://github.com/radix-ui/primitives/blob/main/packages/react/toggle-group/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle-group#anatomy)
 */
export const slots = ["item", "root"] as const;

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description A set of two-state buttons that can be toggled on or off.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toggle-group#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
