// * https://github.com/radix-ui/primitives/blob/main/packages/react/dialog/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/dialog#anatomy)
 */
export const slots = [
  "close",
  "content",
  "description",
  "overlay",
  "root",
  "title",
  "trigger",
  "warningProvider"
] as const;

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
