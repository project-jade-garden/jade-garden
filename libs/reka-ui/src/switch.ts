// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Switch/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/switch#anatomy)
 */
export const slots = ["root", "thumb"] as const;

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Switch**
 * @description A control that allows the user to toggle between checked and not checked.
 * @see [source](https://reka-ui.com/docs/components/switch#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
