// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/toolbar/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Toolbar**
 * @description Displays frequently used actions or tools in a compact, easily accessible bar.
 * @see [source](https://www.bits-ui.com/docs/components/toolbar#api-reference)
 */
export const slots = ["root", "button", "link", "group", "groupItem"] as const;

/**
 * **Toolbar**
 * @description Displays frequently used actions or tools in a compact, easily accessible bar.
 * @see [source](https://www.bits-ui.com/docs/components/toolbar#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toolbar**
 * @description Displays frequently used actions or tools in a compact, easily accessible bar.
 * @see [source](https://www.bits-ui.com/docs/components/toolbar#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; button: {}; link: {}; group: {}; groupItem: {} }>;
