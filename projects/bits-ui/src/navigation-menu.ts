// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/navigation-menu/exports.ts

/**
 * **Navigation Menu**
 * @description A list of links that allow users to navigate between pages of a website.
 * @see [source](https://www.bits-ui.com/docs/components/navigation-menu#api-reference)
 */
export const slots = ["root", "content", "indicator", "item", "link", "list", "trigger", "viewport", "sub"] as const;

/**
 * **Navigation Menu**
 * @description A list of links that allow users to navigate between pages of a website.
 * @see [source](https://www.bits-ui.com/docs/components/navigation-menu#api-reference)
 */
export type Slots = (typeof slots)[number];
