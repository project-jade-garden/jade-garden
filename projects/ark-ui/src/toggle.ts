// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toggle/toggle.anatomy.ts

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const slots = ["root", "indicator"] as const;

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export type Slots = (typeof slots)[number];
