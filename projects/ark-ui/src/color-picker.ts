// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/color-picker/color-picker.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/docs/components/color-picker#anatomy)
 */
export const slots = [
  "root",
  "label",
  "control",
  "trigger",
  "positioner",
  "content",
  "area",
  "areaThumb",
  "valueText",
  "areaBackground",
  "channelSlider",
  "channelSliderLabel",
  "channelSliderTrack",
  "channelSliderThumb",
  "channelSliderValueText",
  "channelInput",
  "transparencyGrid",
  "swatchGroup",
  "swatchTrigger",
  "swatchIndicator",
  "swatch",
  "eyeDropperTrigger",
  "formatTrigger",
  "formatSelect",
  "view"
] as const;

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/docs/components/color-picker#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/docs/components/color-picker#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "color-picker";
      part: "root";
      disabled: "";
      readonly: "";
      invalid: "";
    };
    label: {
      scope: "color-picker";
      part: "label";
      disabled: "";
      readonly: "";
      invalid: "";
      focus: "";
    };
    control: {
      scope: "color-picker";
      part: "control";
      disabled: "";
      readonly: "";
      invalid: "";
      state: "open" | "closed";
      focus: "";
    };
    trigger: {
      scope: "color-picker";
      part: "trigger";
      disabled: "";
      readonly: "";
      invalid: "";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      state: "open" | "closed";
      focus: "";
    };
    content: {
      scope: "color-picker";
      part: "content";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      state: "open" | "closed";
    };
    area: {
      scope: "color-picker";
      part: "area";
      invalid: "";
      disabled: "";
      readonly: "";
    };
    areaThumb: {
      scope: "color-picker";
      part: "area-thumb";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    valueText: {
      scope: "color-picker";
      part: "value-text";
      disabled: "";
      focus: "";
    };
    areaBackground: {
      scope: "color-picker";
      part: "area-background";
      invalid: "";
      disabled: "";
      readonly: "";
    };
    channelSlider: {
      scope: "color-picker";
      part: "channel-slider";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
      orientation: "horizontal" | "vertical";
    };
    channelSliderLabel: {
      scope: "color-picker";
      part: "channel-slider-label";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
    };
    channelSliderTrack: {
      scope: "color-picker";
      part: "channel-slider-track";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
      orientation: "horizontal" | "vertical";
    };
    channelSliderThumb: {
      scope: "color-picker";
      part: "channel-slider-thumb";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
      disabled: "";
      orientation: "horizontal" | "vertical";
    };
    channelSliderValueText: {
      scope: "color-picker";
      part: "channel-slider-value-text";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
    };
    channelInput: {
      scope: "color-picker";
      part: "channel-input";
      channel: "hue" | "saturation" | "brightness" | "lightness" | "red" | "green" | "blue" | "alpha";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    swatchTrigger: {
      scope: "color-picker";
      part: "swatch-trigger";
      state: "checked" | "unchecked";
      value: "";
      disabled: "";
    };
    swatch: {
      scope: "color-picker";
      part: "swatch";
      state: "checked" | "unchecked";
      value: "";
    };
    eyeDropperTrigger: {
      scope: "color-picker";
      part: "eye-dropper-trigger";
      disabled: "";
      invalid: "";
      readonly: "";
    };
  }
>;
