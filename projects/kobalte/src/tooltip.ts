// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/tooltip/index.tsx

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://kobalte.dev/docs/core/components/tooltip#anatomy)
 */
export const slots = ["root", "arrow", "content", "trigger"] as const;

/**
 * **Tooltip**
 * @description A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @see [source](https://kobalte.dev/docs/core/components/tooltip#anatomy)
 */
export type Slots = (typeof slots)[number];
