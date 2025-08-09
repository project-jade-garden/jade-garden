// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/date-range-field/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://www.bits-ui.com/docs/components/date-range-field#api-reference)
 */
export const slots = ["root", "input", "label", "segment"] as const;

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://www.bits-ui.com/docs/components/date-range-field#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Range Field**
 * @description Allows users to input a range of dates within a designated field.
 * @see [source](https://www.bits-ui.com/docs/components/date-range-field#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; input: {}; label: {}; segment: {} }>;
