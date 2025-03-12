// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Label/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#anatomy)
 */
export const slots = ["root"];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Label**
 * @description Renders an accessible label associated with controls.
 * @see [source](https://reka-ui.com/docs/components/label#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
