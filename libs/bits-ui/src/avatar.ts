// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/avatar/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Avatar**
 * @description Represents a user or entity with a recognizable image or placeholder in UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/avatar#api-reference)
 */
export const slots = ["root", "image", "fallback"] as const;

/**
 * **Avatar**
 * @description Represents a user or entity with a recognizable image or placeholder in UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/avatar#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
