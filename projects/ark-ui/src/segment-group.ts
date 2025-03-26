// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const slots = ["root", "label", "item", "itemText", "itemControl", "indicator"] as const;

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export type Slots = (typeof slots)[number];
