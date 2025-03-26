// * https://github.com/radix-ui/primitives/blob/main/packages/react/progress/src/index.ts

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/progress#anatomy)
 */
export const slots = ["indicator", "root"] as const;

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/progress#anatomy)
 */
export type Slots = (typeof slots)[number];
