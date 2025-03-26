// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Avatar/index.ts

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://reka-ui.com/docs/components/avatar#anatomy)
 */
export const slots = ["root", "fallback", "image"] as const;

/**
 * **Avatar**
 * @description An image element with a fallback for representing the user.
 * @see [source](https://reka-ui.com/docs/components/avatar#anatomy)
 */
export type Slots = (typeof slots)[number];
