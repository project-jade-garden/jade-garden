// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/angle-slider/angle-slider.anatomy.ts

/**
 * **Angle Slider**
 * @description A component for selecting a value within a circular range.
 * @see [source](https://ark-ui.com/docs/components/angle-slider#anatomy)
 */
export const slots = ["root", "label", "thumb", "valueText", "control", "track", "markerGroup", "marker"] as const;

/**
 * **Angle Slider**
 * @description A component for selecting a value within a circular range.
 * @see [source](https://ark-ui.com/docs/components/angle-slider#anatomy)
 */
export type Slots = (typeof slots)[number];
