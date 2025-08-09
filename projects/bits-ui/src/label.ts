// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/label/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Label**
 * @description Identifies or describes associated UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/label#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Label**
 * @description Identifies or describes associated UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/label#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Label**
 * @description Identifies or describes associated UI elements.
 * @see [source](https://www.bits-ui.com/docs/components/label#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
