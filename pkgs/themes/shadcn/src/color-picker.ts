// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/color-picker.ts
import { type ColorPickerSlots, createColorPickerSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 *
 * @returns
 * ```js
 * {
 *   base: "parkColorPicker",
 *   root: "parkColorPicker__root",
 *   label: "parkColorPicker__label",
 *   control: "parkColorPicker__control",
 *   trigger: "parkColorPicker__trigger",
 *   positioner: "parkColorPicker__positioner",
 *   content: "parkColorPicker__content",
 *   area: "parkColorPicker__area",
 *   areaThumb: "parkColorPicker__areaThumb",
 *   valueText: "parkColorPicker__valueText",
 *   areaBackground: "parkColorPicker__areaBackground",
 *   channelSlider: "parkColorPicker__channelSlider",
 *   channelSliderLabel: "parkColorPicker__channelSliderLabel",
 *   channelSliderTrack: "parkColorPicker__channelSliderTrack",
 *   channelSliderThumb: "parkColorPicker__channelSliderThumb",
 *   channelSliderValueText: "parkColorPicker__channelSliderValueText",
 *   channelInput: "parkColorPicker__channelInput",
 *   transparencyGrid: "parkColorPicker__transparencyGrid",
 *   swatchGroup: "parkColorPicker__swatchGroup",
 *   swatchTrigger: "parkColorPicker__swatchTrigger",
 *   swatchIndicator: "parkColorPicker__swatchIndicator",
 *   swatch: "parkColorPicker__swatch",
 *   eyeDropperTrigger: "parkColorPicker__eyeDropperTrigger",
 *   formatTrigger: "parkColorPicker__formatTrigger",
 *   formatSelect: "parkColorPicker__formatSelect",
 *   view: "parkColorPicker__view"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const colorPickerSlots = createColorPickerSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("color-picker", colorPickerSlots));

/**
 * **Color Picker**
 * @description A component that allows users to select a color from a color picker.
 *
 * @example
 * ```css
 * .parkColorPicker { }
 *
 * .parkColorPicker__root {
 *   (@)apply flex flex-col gap-1.5;
 * }
 *
 * .parkColorPicker__label {
 *   (@)apply text-fg-default text-sm font-medium;
 * }
 *
 * .parkColorPicker__control {
 *   (@)apply flex flex-row gap-2;
 * }
 *
 * .parkColorPicker__trigger { }
 *
 * .parkColorPicker__positioner { }
 *
 * .parkColorPicker__content {
 *   (@)apply p-4 max-w-96 bg-bg-default rounded-l3 shadow-lg flex z-[--z-index-dropdown] [&:is([hidden])]:hidden flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkColorPicker__area {
 *   (@)apply h-36 rounded-l2 overflow-hidden;
 * }
 *
 * .parkColorPicker__areaThumb {
 *   (@)apply size-2.5 rounded-full outline-none shadow-[0_0_0_2px_#fff,_0_0_2px_1px_#000];
 * }
 *
 * .parkColorPicker__valueText { }
 *
 * .parkColorPicker__areaBackground {
 *   (@)apply h-full;
 * }
 *
 * .parkColorPicker__channelSlider {
 *   (@)apply rounded-l2;
 * }
 *
 * .parkColorPicker__channelSliderLabel { }
 *
 * .parkColorPicker__channelSliderTrack {
 *   (@)apply h-3 rounded-l2;
 * }
 *
 * .parkColorPicker__channelSliderThumb {
 *   (@)apply size-2.5 rounded-full outline-none shadow-[0_0_0_2px_#fff,_0_0_2px_1px_#000] -translate-x-1/2 -translate-y-1/2;
 * }
 *
 * .parkColorPicker__channelSliderValueText { }
 *
 * .parkColorPicker__channelInput { }
 *
 * .parkColorPicker__transparencyGrid {
 *   (@)apply rounded-l2;
 * }
 *
 * .parkColorPicker__swatchGroup {
 *   (@)apply bg-bg-default grid gap-2 grid-cols-7;
 * }
 *
 * .parkColorPicker__swatchTrigger { }
 *
 * .parkColorPicker__swatchIndicator { }
 *
 * .parkColorPicker__swatch {
 *   (@)apply size-6 rounded-l2 shadow-[0_0_0_1px_var(--colors-border-emphasized),_0_0_0_2px_var(--colors-bg-default)_inset];
 * }
 *
 * .parkColorPicker__eyeDropperTrigger { }
 *
 * .parkColorPicker__formatTrigger { }
 *
 * .parkColorPicker__formatSelect { }
 *
 * .parkColorPicker__view { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/color-picker#anatomy)
 */
export const colorPickerStyledSlots = {
  base: "parkColorPicker",
  root: [
    "parkColorPicker__root",

    // Layout
    "flex",

    // Flexbox & Grid
    "flex-col",
    "gap-1.5"
  ],
  label: [
    "parkColorPicker__label",

    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  control: [
    "parkColorPicker__control",

    // Layout
    "flex",

    // Flexbox & Grid
    "flex-row",
    "gap-2"
  ],
  trigger: "parkColorPicker__trigger",
  positioner: "parkColorPicker__positioner",
  content: [
    "parkColorPicker__content",

    // Spacing
    "p-4",

    // Sizing
    "max-w-96",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l3",

    // Effects
    "shadow-lg",

    // Layout
    "flex",
    "z-[--z-index-dropdown]",
    "[&:is([hidden])]:hidden",

    // Flexbox & Grid
    "flex-col",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
  ],
  area: [
    "parkColorPicker__area",

    // Sizing
    "h-36",

    // Borders
    "rounded-l2",

    // Layout
    "overflow-hidden"
  ],
  areaThumb: [
    "parkColorPicker__areaThumb",

    // Sizing
    "size-2.5",

    // Borders
    "rounded-full",
    "outline-none",

    // Effects
    "shadow-[0_0_0_2px_#fff,_0_0_2px_1px_#000]"
  ],
  valueText: "parkColorPicker__valueText",
  areaBackground: [
    "parkColorPicker__areaBackground",

    // Sizing
    "h-full"
  ],
  channelSlider: [
    "parkColorPicker__channelSlider",

    // Borders
    "rounded-l2"
  ],
  channelSliderLabel: "parkColorPicker__channelSliderLabel",
  channelSliderTrack: [
    "parkColorPicker__channelSliderTrack",

    // Sizing
    "h-3",

    // Borders
    "rounded-l2"
  ],
  channelSliderThumb: [
    "parkColorPicker__channelSliderThumb",

    // Sizing
    "size-2.5",

    // Borders
    "rounded-full",
    "outline-none",

    // Effects
    "shadow-[0_0_0_2px_#fff,_0_0_2px_1px_#000]",

    // Transforms
    "-translate-x-1/2",
    "-translate-y-1/2"
  ],
  channelSliderValueText: "parkColorPicker__channelSliderValueText",
  channelInput: "parkColorPicker__channelInput",
  transparencyGrid: [
    "parkColorPicker__transparencyGrid",

    // Borders
    "rounded-l2"
  ],
  swatchGroup: [
    "parkColorPicker__swatchGroup",

    // Backgrounds
    "bg-bg-default",

    // Layout
    "grid",

    // Flexbox & Grid
    "gap-2",
    "grid-cols-7"
  ],
  swatchTrigger: "parkColorPicker__swatchTrigger",
  swatchIndicator: "parkColorPicker__swatchIndicator",
  swatch: [
    "parkColorPicker__swatch",

    // Sizing
    "size-6",

    // Borders
    "rounded-l2",

    // Effects
    "shadow-[0_0_0_1px_var(--colors-border-emphasized),_0_0_0_2px_var(--colors-bg-default)_inset]"
  ],
  eyeDropperTrigger: "parkColorPicker__eyeDropperTrigger",
  formatTrigger: "parkColorPicker__formatTrigger",
  formatSelect: "parkColorPicker__formatSelect",
  view: "parkColorPicker__view"
} as const satisfies Record<ColorPickerSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("color-picker", colorPickerStyledSlots));
