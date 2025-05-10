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
    root: {};
    label: {};
    control: {};
    trigger: {};
    positioner: {};
    content: {};
    area: {};
    areaThumb: {};
    valueText: {};
    areaBackground: {};
    channelSlider: {};
    channelSliderLabel: {};
    channelSliderTrack: {};
    channelSliderThumb: {};
    channelSliderValueText: {};
    channelInput: {};
    transparencyGrid: {};
    swatchGroup: {};
    swatchTrigger: {};
    swatchIndicator: {};
    swatch: {};
    eyeDropperTrigger: {};
    formatTrigger: {};
    formatSelect: {};
    view: {};
  }
>;
