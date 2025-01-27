import { createSlots } from "@spark-css/core/slider";
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
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/slider").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  label: slots.label,
  thumb: slots.thumb,
  valueText: slots.valueText,
  track: slots.track,
  range: slots.range,
  control: slots.control,
  markerGroup: slots.markerGroup,
  marker: slots.marker,
  draggingIndicator: slots.draggingIndicator
};
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
export const sliderStyles = styledSlots;
