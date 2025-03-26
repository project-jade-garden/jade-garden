// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/accordion/accordion.anatomy.ts

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const slots = ["root", "item", "itemTrigger", "itemContent", "itemIndicator"] as const;

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export type Slots = (typeof slots)[number];
