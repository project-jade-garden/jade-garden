// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Separator/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://reka-ui.com/docs/components/separator#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://reka-ui.com/docs/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://reka-ui.com/docs/components/separator#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
