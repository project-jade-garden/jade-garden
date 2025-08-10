// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/progress/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Progress**
 * @description Visualizes the progress or completion status of a task or process.
 * @see [source](https://www.bits-ui.com/docs/components/progress#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Progress**
 * @description Visualizes the progress or completion status of a task or process.
 * @see [source](https://www.bits-ui.com/docs/components/progress#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Progress**
 * @description Visualizes the progress or completion status of a task or process.
 * @see [source](https://www.bits-ui.com/docs/components/progress#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
