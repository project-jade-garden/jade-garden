// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tour/tour.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/vue/docs/components/tour#anatomy)
 */
export const slots = [
  "arrow",
  "arrowTip",
  "positioner",
  "content",
  "title",
  "actionTrigger",
  "closeTrigger",
  "progressText",
  "description",
  "backdrop",
  "spotlight",
  "control"
] as const;

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/vue/docs/components/tour#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
