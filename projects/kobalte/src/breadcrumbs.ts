// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/breadcrumbs/index.tsx

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
