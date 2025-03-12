// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/PinInput/index.ts
import type { ClassValue } from "tailwind-variants";

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

export type TVSlots = Record<Slots, ClassValue>;
