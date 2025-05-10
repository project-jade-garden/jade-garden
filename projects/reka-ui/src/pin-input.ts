// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/PinInput/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Pin Input**
 * @description A sequence of one-character alphanumeric inputs.
 * @see [source](https://reka-ui.com/docs/components/pin-input#anatomy)
 */
export const slots = ["root", "input"] as const;

/**
 * **Pin Input**
 * @description A sequence of one-character alphanumeric inputs.
 * @see [source](https://reka-ui.com/docs/components/pin-input#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Pin Input**
 * @description A sequence of one-character alphanumeric inputs.
 * @see [source](https://reka-ui.com/docs/components/pin-input#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; input: {} }>;
