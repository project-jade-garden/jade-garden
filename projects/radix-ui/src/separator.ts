// * https://github.com/radix-ui/primitives/blob/main/packages/react/separator/src/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/separator#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
