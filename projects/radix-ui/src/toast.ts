// * https://github.com/radix-ui/primitives/blob/main/packages/react/toast/src/index.ts

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toast#anatomy)
 */
export const slots = ["action", "close", "description", "provider", "root", "title", "viewport"] as const;

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];
