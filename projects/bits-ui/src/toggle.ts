// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/toggle/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle**
 * @description A control element that switches between two states, providing a binary choice.
 * @see [source](https://www.bits-ui.com/docs/components/toggle#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Toggle**
 * @description A control element that switches between two states, providing a binary choice.
 * @see [source](https://www.bits-ui.com/docs/components/toggle#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle**
 * @description A control element that switches between two states, providing a binary choice.
 * @see [source](https://www.bits-ui.com/docs/components/toggle#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
