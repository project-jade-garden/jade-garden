import { type Slots, createSlots } from "@spark-css/core/progress";

/**
 * **Progress**
 * @description
 * **Circular** - An element that shows either determinate or indeterminate progress.
 * **Linear** - An element that shows either determinate or indeterminate progress.
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
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/progress").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  track: slots.track,
  range: slots.range,
  valueText: slots.valueText,
  view: slots.view,
  circle: slots.circle,
  circleTrack: slots.circleTrack,
  circleRange: slots.circleRange
} satisfies Record<Slots, string | string[]>;

/**
 * **Progress**
 * @description
 * **Circular** - An element that shows either determinate or indeterminate progress.
 * **Linear** - An element that shows either determinate or indeterminate progress.
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
export const progressStyles = styledSlots;
