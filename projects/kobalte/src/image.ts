// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/image/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Image**
 * @description An image element with an optional fallback for loading and error status.
 * @see [source](https://kobalte.dev/docs/core/components/image#anatomy)
 */
export const slots = ["fallback", "img"] as const;

/**
 * **Image**
 * @description An image element with an optional fallback for loading and error status.
 * @see [source](https://kobalte.dev/docs/core/components/image#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Image**
 * @description An image element with an optional fallback for loading and error status.
 * @see [source](https://kobalte.dev/docs/core/components/image#api-reference)
 */
export type Traits = SVATraits<Slots, { fallback: {}; img: {} }>;
