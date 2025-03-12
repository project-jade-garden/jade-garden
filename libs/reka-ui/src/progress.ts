// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Progress/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://reka-ui.com/docs/components/progress#anatomy)
 */
export const slots = ["root", "indicator"] as const;

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://reka-ui.com/docs/components/progress#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
