// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Avatar/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://reka-ui.com/docs/components/avatar#anatomy)
 */
export const slots = ["root", "fallback", "image"] as const;

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://reka-ui.com/docs/components/avatar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://reka-ui.com/docs/components/avatar#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
