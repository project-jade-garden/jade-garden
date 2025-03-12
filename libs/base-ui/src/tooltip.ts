// * https://github.com/mui/base-ui/blob/master/packages/react/src/tooltip/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export const slots = ["arrow", "popup", "positioner", "provider", "root", "trigger"] as const;

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tooltip**
 * @description A popup that appears when an element is hovered or focused, showing a hint for sighted users.
 * @see [source](https://base-ui.com/react/components/tooltip#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
