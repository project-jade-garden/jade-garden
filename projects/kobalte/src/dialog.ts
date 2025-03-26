// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/dialog/index.tsx

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it.
 * @see [source](https://kobalte.dev/docs/core/components/dialog#anatomy)
 */
export const slots = ["closeButton", "content", "description", "overlay", "title", "trigger"] as const;

/**
 * **Dialog**
 * @description A window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it.
 * @see [source](https://kobalte.dev/docs/core/components/dialog#anatomy)
 */
export type Slots = (typeof slots)[number];
