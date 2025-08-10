// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Progress/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://reka-ui.com/docs/components/progress#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      state: "complete" | "indeterminate" | "loading";
      value: "The current value";
      max: "The max value";
    };
    indicator: {
      state: "complete" | "indeterminate" | "loading";
      value: "The current value";
      max: "The max value";
    };
  }
>;
