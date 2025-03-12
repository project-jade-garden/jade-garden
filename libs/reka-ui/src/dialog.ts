// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Dialog/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @see [source](https://reka-ui.com/docs/components/dialog#anatomy)
 */
export const slots = ["root", "trigger", "portal", "content", "overlay", "close", "title", "description"] as const;

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @see [source](https://reka-ui.com/docs/components/dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
