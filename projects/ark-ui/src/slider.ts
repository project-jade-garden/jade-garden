// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/slider/slider.anatomy.ts

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/docs/components/slider#anatomy)
 */
export const slots = [
  "root",
  "label",
  "thumb",
  "valueText",
  "track",
  "range",
  "control",
  "markerGroup",
  "marker",
  "draggingIndicator"
] as const;

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/docs/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];
