import {
  type SliderSlots,
  // createSliderDocs,
  createSliderSlots
} from "@spark-css/core/slider";

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 *
 * @returns
 * ```js
 * {
 *   base: "slider",
 *   root: "slider__root",
 *   label: "slider__label",
 *   thumb: "slider__thumb",
 *   valueText: "slider__value-text",
 *   track: "slider__track",
 *   range: "slider__range",
 *   control: "slider__control",
 *   markerGroup: "slider__marker-group",
 *   marker: "slider__marker",
 *   draggingIndicator: "slider__dragging-indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export const sliderSlots = createSliderSlots({});

// * Uncomment before styling slots
// createSliderDocs("anatomy", sliderSlots);

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 *
 * @example
 * ```css
 * .slider { }
 *
 * .slider__root { }
 *
 * .slider__label { }
 *
 * .slider__thumb { }
 *
 * .slider__value-text { }
 *
 * .slider__track { }
 *
 * .slider__range { }
 *
 * .slider__control { }
 *
 * .slider__marker-group { }
 *
 * .slider__marker { }
 *
 * .slider__dragging-indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export const sliderStyledSlots = {
  base: "slider",
  root: "slider__root",
  label: "slider__label",
  thumb: "slider__thumb",
  valueText: "slider__value-text",
  track: "slider__track",
  range: "slider__range",
  control: "slider__control",
  markerGroup: "slider__marker-group",
  marker: "slider__marker",
  draggingIndicator: "slider__dragging-indicator"
} as const satisfies Record<SliderSlots, string | string[]>;

// * Uncomment after styling slots
// createSliderDocs("styled", sliderStyledSlots);
