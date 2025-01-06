import { type ColorPickerSlots, createColorPickerSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 *
 * @returns
 * ```js
 * {
 *   base: "color-picker",
 *   root: "color-picker__root",
 *   label: "color-picker__label",
 *   control: "color-picker__control",
 *   trigger: "color-picker__trigger",
 *   positioner: "color-picker__positioner",
 *   content: "color-picker__content",
 *   area: "color-picker__area",
 *   areaThumb: "color-picker__area-thumb",
 *   valueText: "color-picker__value-text",
 *   areaBackground: "color-picker__area-background",
 *   channelSlider: "color-picker__channel-slider",
 *   channelSliderLabel: "color-picker__channel-slider-label",
 *   channelSliderTrack: "color-picker__channel-slider-track",
 *   channelSliderThumb: "color-picker__channel-slider-thumb",
 *   channelSliderValueText: "color-picker__channel-slider-value-text",
 *   channelInput: "color-picker__channel-input",
 *   transparencyGrid: "color-picker__transparency-grid",
 *   swatchGroup: "color-picker__swatch-group",
 *   swatchTrigger: "color-picker__swatch-trigger",
 *   swatchIndicator: "color-picker__swatch-indicator",
 *   swatch: "color-picker__swatch",
 *   eyeDropperTrigger: "color-picker__eye-dropper-trigger",
 *   formatTrigger: "color-picker__format-trigger",
 *   formatSelect: "color-picker__format-select",
 *   view: "color-picker__view"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const colorPickerSlots = createColorPickerSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("color-picker", colorPickerSlots));

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 *
 * @example
 * ```css
 * .color-picker { }
 *
 * .color-picker__root { }
 *
 * .color-picker__label { }
 *
 * .color-picker__control { }
 *
 * .color-picker__trigger { }
 *
 * .color-picker__positioner { }
 *
 * .color-picker__content { }
 *
 * .color-picker__area { }
 *
 * .color-picker__area-thumb { }
 *
 * .color-picker__value-text { }
 *
 * .color-picker__area-background { }
 *
 * .color-picker__channel-slider { }
 *
 * .color-picker__channel-slider-label { }
 *
 * .color-picker__channel-slider-track { }
 *
 * .color-picker__channel-slider-thumb { }
 *
 * .color-picker__channel-slider-value-text { }
 *
 * .color-picker__channel-input { }
 *
 * .color-picker__transparency-grid { }
 *
 * .color-picker__swatch-group { }
 *
 * .color-picker__swatch-trigger { }
 *
 * .color-picker__swatch-indicator { }
 *
 * .color-picker__swatch { }
 *
 * .color-picker__eye-dropper-trigger { }
 *
 * .color-picker__format-trigger { }
 *
 * .color-picker__format-select { }
 *
 * .color-picker__view { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const colorPickerStyledSlots = {
  base: "color-picker",
  root: "color-picker__root",
  label: "color-picker__label",
  control: "color-picker__control",
  trigger: "color-picker__trigger",
  positioner: "color-picker__positioner",
  content: "color-picker__content",
  area: "color-picker__area",
  areaThumb: "color-picker__area-thumb",
  valueText: "color-picker__value-text",
  areaBackground: "color-picker__area-background",
  channelSlider: "color-picker__channel-slider",
  channelSliderLabel: "color-picker__channel-slider-label",
  channelSliderTrack: "color-picker__channel-slider-track",
  channelSliderThumb: "color-picker__channel-slider-thumb",
  channelSliderValueText: "color-picker__channel-slider-value-text",
  channelInput: "color-picker__channel-input",
  transparencyGrid: "color-picker__transparency-grid",
  swatchGroup: "color-picker__swatch-group",
  swatchTrigger: "color-picker__swatch-trigger",
  swatchIndicator: "color-picker__swatch-indicator",
  swatch: "color-picker__swatch",
  eyeDropperTrigger: "color-picker__eye-dropper-trigger",
  formatTrigger: "color-picker__format-trigger",
  formatSelect: "color-picker__format-select",
  view: "color-picker__view"
} as const satisfies Record<ColorPickerSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("color-picker", colorPickerStyledSlots));
