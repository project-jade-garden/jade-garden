// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/radio-group/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Radio Group**
 * @description Allows users to select a single option from a list of mutually exclusive choices.
 * @see [source](https://www.bits-ui.com/docs/components/radio-group#api-reference)
 */
export const slots = ["root", "item"] as const;

/**
 * **Radio Group**
 * @description Allows users to select a single option from a list of mutually exclusive choices.
 * @see [source](https://www.bits-ui.com/docs/components/radio-group#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description Allows users to select a single option from a list of mutually exclusive choices.
 * @see [source](https://www.bits-ui.com/docs/components/radio-group#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; item: {} }>;
