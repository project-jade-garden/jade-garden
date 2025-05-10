// * https://github.com/radix-ui/primitives/blob/main/packages/react/avatar/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/avatar#anatomy)
 */
export const slots = ["fallback", "image", "root"] as const;

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/avatar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/avatar#api-reference)
 */
export type Traits = SVATraits<Slots, { fallback: {}; image: {}; root: {} }>;
