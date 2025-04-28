// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/switch/switch.anatomy.ts

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 * @see [source](https://ark-ui.com/docs/components/switch#anatomy)
 */
export const slots = ["root", "label", "control", "thumb"] as const;

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 * @see [source](https://ark-ui.com/docs/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];
