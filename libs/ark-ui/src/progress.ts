// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/progress/progress.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Progress**
 * @description An element that shows either determinate or indeterminate progress.
 * @see [circular](https://ark-ui.com/vue/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/vue/docs/components/progress-linear#anatomy)
 */
export const slots = [
  "root",
  "label",
  "track",
  "range",
  "valueText",
  "view",
  "circle",
  "circleTrack",
  "circleRange"
] as const;

/**
 * **Progress**
 * @description An element that shows either determinate or indeterminate progress.
 * @see [circular](https://ark-ui.com/vue/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/vue/docs/components/progress-linear#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Progress**
 * @description An element that shows either determinate or indeterminate progress.
 * @see [circular](https://ark-ui.com/vue/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/vue/docs/components/progress-linear#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
