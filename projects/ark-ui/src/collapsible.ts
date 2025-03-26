// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/collapsible/collapsible.anatomy.ts

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const slots = ["root", "trigger", "content"] as const;

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];
