// * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle**
 * @description A two-state button that can be on or off.
 * @see [source](https://base-ui.com/react/components/toggle#api-reference)
 */
export const slots = ["root"];

/**
 * **Toggle**
 * @description A two-state button that can be on or off.
 * @see [source](https://base-ui.com/react/components/toggle#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
