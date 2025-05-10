// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/separator/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://kobalte.dev/docs/core/components/separator#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://kobalte.dev/docs/core/components/separator#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Separator**
 * @description Visually or semantically separates content.
 * @see [source](https://kobalte.dev/docs/core/components/separator#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
