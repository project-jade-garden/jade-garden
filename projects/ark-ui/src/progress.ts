// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/progress/progress.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Progress**
 * @description An element that shows either determinate or indeterminate progress.
 * @see [circular](https://ark-ui.com/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/docs/components/progress-linear#anatomy)
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
 * @see [circular](https://ark-ui.com/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/docs/components/progress-linear#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Progress**
 * @description An element that shows either determinate or indeterminate progress.
 * @see [circular](https://ark-ui.com/docs/components/progress-circular#anatomy)
 * @see [linear](https://ark-ui.com/docs/components/progress-linear#anatomy)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "progress";
      part: "root";
      max: "";
      value: "";
      state: "";
      orientation: "horizontal" | "vertical";
    };
    label: {
      scope: "progress";
      part: "label";
      orientation: "horizontal" | "vertical";
    };
    range: {
      scope: "progress";
      part: "range";
      orientation: "horizontal" | "vertical";
      state: "";
    };
    circleTrack: {
      scope: "progress";
      part: "circle-track";
      orientation: "horizontal" | "vertical";
    };
    circleRange: {
      scope: "progress";
      part: "circle-range";
      state: "";
    };
    view: {
      scope: "progress";
      part: "view";
      state: "";
    };
  }
>;
