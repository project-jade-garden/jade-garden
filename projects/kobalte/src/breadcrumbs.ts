// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/breadcrumbs/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Breadcrumbs**
 * @description Show hierarchy and navigational context for a user’s location within an application.
 * @see [source](https://kobalte.dev/docs/core/components/breadcrumbs#anatomy)
 */
export const slots = ["link", "separator"] as const;

/**
 * **Breadcrumbs**
 * @description Show hierarchy and navigational context for a user’s location within an application.
 * @see [source](https://kobalte.dev/docs/core/components/breadcrumbs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Breadcrumbs**
 * @description Show hierarchy and navigational context for a user’s location within an application.
 * @see [source](https://kobalte.dev/docs/core/components/breadcrumbs#api-reference)
 */
export type Traits = SVATraits<Slots, { link: {}; separator: {} }>;
