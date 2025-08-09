// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/checkbox/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Checkbox**
 * @description Allow users to switch between checked, unchecked, and indeterminate states.
 * @see [source](https://www.bits-ui.com/docs/components/checkbox#api-reference)
 */
export const slots = ["root", "group", "groupLabel"] as const;

/**
 * **Checkbox**
 * @description Allow users to switch between checked, unchecked, and indeterminate states.
 * @see [source](https://www.bits-ui.com/docs/components/checkbox#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Checkbox**
 * @description Allow users to switch between checked, unchecked, and indeterminate states.
 * @see [source](https://www.bits-ui.com/docs/components/checkbox#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; group: {}; groupLabel: {} }>;
