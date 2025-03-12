// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/color-picker/color-picker.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const slots = [
  "content",
  "label",
  "area",
  "root",
  "control",
  "trigger",
  "positioner",
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
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
