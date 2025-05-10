// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/meter/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/meter#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/meter#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Meter**
 * @description Display real-time measurements within a defined range.
 * @see [source](https://www.bits-ui.com/docs/components/meter#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
