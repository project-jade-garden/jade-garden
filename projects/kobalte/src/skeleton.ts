// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/skeleton/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Skeleton**
 * @description Visually indicates content loading
 * @see [source](https://kobalte.dev/docs/core/components/skeleton#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
