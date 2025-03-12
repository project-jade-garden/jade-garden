// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/progress/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Progress**
 * @description Visualizes the progress or completion status of a task or process.
 * @see [source](https://www.bits-ui.com/docs/components/progress#api-reference)
 */
export const slots = ["root"];

/**
 * **Progress**
 * @description Visualizes the progress or completion status of a task or process.
 * @see [source](https://www.bits-ui.com/docs/components/progress#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
