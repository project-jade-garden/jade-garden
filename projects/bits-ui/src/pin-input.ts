// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/pin-input/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Pin Input**
 * @description Allows users to input a sequence of one-character alphanumeric inputs.
 * @see [source](https://www.bits-ui.com/docs/components/pin-input#api-reference)
 */
export const slots = ["root", "cell"] as const;

/**
 * **Pin Input**
 * @description Allows users to input a sequence of one-character alphanumeric inputs.
 * @see [source](https://www.bits-ui.com/docs/components/pin-input#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Pin Input**
 * @description Allows users to input a sequence of one-character alphanumeric inputs.
 * @see [source](https://www.bits-ui.com/docs/components/pin-input#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; cell: {} }>;
