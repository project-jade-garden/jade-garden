// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/toggle-group/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Toggle Group**
 * @description Groups multiple toggle controls, allowing users to enable one or multiple options.
 * @see [source](https://www.bits-ui.com/docs/components/toggle-group#api-reference)
 */
export const slots = ["root", "item"] as const;

/**
 * **Toggle Group**
 * @description Groups multiple toggle controls, allowing users to enable one or multiple options.
 * @see [source](https://www.bits-ui.com/docs/components/toggle-group#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description Groups multiple toggle controls, allowing users to enable one or multiple options.
 * @see [source](https://www.bits-ui.com/docs/components/toggle-group#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; item: {} }>;
