// * https://github.com/mui/base-ui/blob/master/packages/react/src/progress/index.parts.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Progress**
 * @description Displays the status of a task that takes a long time.
 * @see [source](https://base-ui.com/react/components/progress#api-reference)
 */
export const slots = ["indicator", "root", "track", "value"] as const;

/**
 * **Progress**
 * @description Displays the status of a task that takes a long time.
 * @see [source](https://base-ui.com/react/components/progress#api-reference)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
