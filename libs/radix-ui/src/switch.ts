// * https://github.com/radix-ui/primitives/blob/main/packages/react/switch/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/switch#anatomy)
 */
export const slots = ["root", "thumb"] as const;

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
