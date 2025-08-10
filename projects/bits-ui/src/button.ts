// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/button/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Button**
 * @description A component that if passed a `href` prop will render an anchor element instead of a button element.
 * @see [source](https://www.bits-ui.com/docs/components/button#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Button**
 * @description A component that if passed a `href` prop will render an anchor element instead of a button element.
 * @see [source](https://www.bits-ui.com/docs/components/button#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Button**
 * @description A component that if passed a `href` prop will render an anchor element instead of a button element.
 * @see [source](https://www.bits-ui.com/docs/components/button#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
