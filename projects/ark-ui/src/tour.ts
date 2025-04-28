// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tour/tour.anatomy.ts

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/docs/components/tour#anatomy)
 */
export const slots = [
  "content",
  "actionTrigger",
  "closeTrigger",
  "progressText",
  "title",
  "description",
  "positioner",
  "arrow",
  "arrowTip",
  "backdrop",
  "spotlight",
  "control"
] as const;

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/docs/components/tour#anatomy)
 */
export type Slots = (typeof slots)[number];
