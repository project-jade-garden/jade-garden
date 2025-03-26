// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/scroll-area/exports.ts

/**
 * **Scroll Area**
 * @description Provides a consistent scroll area across platforms.
 * @see [source](https://www.bits-ui.com/docs/components/scroll-area#api-reference)
 */
export const slots = ["root", "viewport", "scrollbar", "thumb", "corner"] as const;

/**
 * **Scroll Area**
 * @description Provides a consistent scroll area across platforms.
 * @see [source](https://www.bits-ui.com/docs/components/scroll-area#api-reference)
 */
export type Slots = (typeof slots)[number];
