// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/collapsible/index.tsx

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a content.
 * @see [source](https://kobalte.dev/docs/core/components/collapsible#anatomy)
 */
export const slots = ["content", "trigger"] as const;

/**
 * **Collapsible**
 * @description An interactive component which expands/collapses a content.
 * @see [source](https://kobalte.dev/docs/core/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];
