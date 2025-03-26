// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/avatar/avatar.anatomy.ts

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export const slots = ["root", "image", "fallback"] as const;

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/vue/docs/components/avatar#anatomy)
 */
export type Slots = (typeof slots)[number];
