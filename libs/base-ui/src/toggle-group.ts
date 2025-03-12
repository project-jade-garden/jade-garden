// * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toggle Group**
 * @description Provides a shared state to a series of toggle buttons.
 * @see [source](https://base-ui.com/react/components/toggle-group#api-reference)
 */
export const slots = ["root"];

/**
 * **Toggle Group**
 * @description Provides a shared state to a series of toggle buttons.
 * @see [source](https://base-ui.com/react/components/toggle-group#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
