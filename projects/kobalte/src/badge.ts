// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/badge/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Badge**
 * @description A Badge component is used to display small pieces of information or status indicators.
 * @see [source](https://kobalte.dev/docs/core/components/badge#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Badge**
 * @description A Badge component is used to display small pieces of information or status indicators.
 * @see [source](https://kobalte.dev/docs/core/components/badge#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Badge**
 * @description A Badge component is used to display small pieces of information or status indicators.
 * @see [source](https://kobalte.dev/docs/core/components/badge#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
