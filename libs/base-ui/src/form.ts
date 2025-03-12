// * https://github.com/mui/base-ui/blob/master/packages/react/src/form/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Form**
 * @description A native form element with consolidated error handling.
 * @see [source](https://base-ui.com/react/components/form#api-reference)
 */
export const slots = ["root"];

/**
 * **Form**
 * @description A native form element with consolidated error handling.
 * @see [source](https://base-ui.com/react/components/form#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
