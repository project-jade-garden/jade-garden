// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/tooltip/exports.ts

/**
 * **Tooltip**
 * @description Provides additional information or context when users hover over or interact with an element.
 * @see [source](https://www.bits-ui.com/docs/components/tooltip#api-reference)
 */
export const slots = ["root", "content", "contentStatic", "trigger", "arrow", "provider"] as const;

/**
 * **Tooltip**
 * @description Provides additional information or context when users hover over or interact with an element.
 * @see [source](https://www.bits-ui.com/docs/components/tooltip#api-reference)
 */
export type Slots = (typeof slots)[number];
