// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/collapsible/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Collapsible**
 * @description Conceals or reveals content sections, enhancing space utilization and organization.
 * @see [source](https://www.bits-ui.com/docs/components/collapsible#api-reference)
 */
export const slots = ["root", "content", "trigger"] as const;

/**
 * **Collapsible**
 * @description Conceals or reveals content sections, enhancing space utilization and organization.
 * @see [source](https://www.bits-ui.com/docs/components/collapsible#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
