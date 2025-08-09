// * https://github.com/radix-ui/primitives/blob/main/packages/react/progress/src/index.ts
import type { SVATraits } from "jade-garden/types";

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

/**
 * **Progress**
 * @description Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/progress#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    indicator: {
      state: "complete" | "indeterminate" | "loading";
      value: "number";
      max: "number";
    };
    root: {
      state: "complete" | "indeterminate" | "loading";
      value: "number";
      max: "number";
    };
  }
>;
