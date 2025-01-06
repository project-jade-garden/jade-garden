import { type ProgressSlots, createProgressSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Progress**
 * @description **Circular** - An element that shows either determinate or indeterminate progress. **Linear** - An element that shows either determinate or indeterminate progress.
 *
 * @returns
 * ```js
 * {
 *   base: "progress",
 *   root: "progress__root",
 *   label: "progress__label",
 *   track: "progress__track",
 *   range: "progress__range",
 *   valueText: "progress__value-text",
 *   view: "progress__view",
 *   circle: "progress__circle",
 *   circleTrack: "progress__circle-track",
 *   circleRange: "progress__circle-range"
 * }
 * ```
 *
 * @see [Circular](https://ark-ui.com/vue/docs/components/progress-circular#anatomy)
 * @see [Linear](https://ark-ui.com/vue/docs/components/progress-linear#anatomy)
 */
export const progressSlots = createProgressSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("progress", progressSlots));

/**
 * **Progress**
 * @description **Circular** - An element that shows either determinate or indeterminate progress. **Linear** - An element that shows either determinate or indeterminate progress.
 *
 * @example
 * ```css
 * .progress { }
 *
 * .progress__root { }
 *
 * .progress__label { }
 *
 * .progress__track { }
 *
 * .progress__range { }
 *
 * .progress__value-text { }
 *
 * .progress__view { }
 *
 * .progress__circle { }
 *
 * .progress__circle-track { }
 *
 * .progress__circle-range { }
 * ```
 *
 * @see [Circular](https://ark-ui.com/vue/docs/components/progress-circular#anatomy)
 * @see [Linear](https://ark-ui.com/vue/docs/components/progress-linear#anatomy)
 */
export const progressStyledSlots = {
  base: "progress",
  root: "progress__root",
  label: "progress__label",
  track: "progress__track",
  range: "progress__range",
  valueText: "progress__value-text",
  view: "progress__view",
  circle: "progress__circle",
  circleTrack: "progress__circle-track",
  circleRange: "progress__circle-range"
} as const satisfies Record<ProgressSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("progress", progressStyledSlots));
