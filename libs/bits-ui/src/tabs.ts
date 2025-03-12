// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/tabs/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description Organizes content into distinct sections, allowing users to switch between them.
 * @see [source](https://www.bits-ui.com/docs/components/tabs#api-reference)
 */
export const slots = ["root", "content", "list", "trigger"] as const;

/**
 * **Tabs**
 * @description Organizes content into distinct sections, allowing users to switch between them.
 * @see [source](https://www.bits-ui.com/docs/components/tabs#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
