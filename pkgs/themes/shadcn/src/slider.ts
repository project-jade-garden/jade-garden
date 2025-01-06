// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/slider.ts
import { type SliderSlots, createSliderSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSlider",
 *   root: "parkSlider__root",
 *   label: "parkSlider__label",
 *   thumb: "parkSlider__thumb",
 *   valueText: "parkSlider__valueText",
 *   track: "parkSlider__track",
 *   range: "parkSlider__range",
 *   control: "parkSlider__control",
 *   markerGroup: "parkSlider__markerGroup",
 *   marker: "parkSlider__marker",
 *   draggingIndicator: "parkSlider__draggingIndicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export const sliderSlots = createSliderSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("slider", sliderSlots));

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 *
 * @example
 * ```css
 * .parkSlider { }
 *
 * .parkSlider__root {
 *   (@)apply w-full flex gap-1 flex-col;
 * }
 *
 * .parkSlider__label {
 *   (@)apply text-fg-default font-medium;
 * }
 *
 * .parkSlider__thumb {
 *   (@)apply bg-bg-default rounded-full border-2 border-[--colors-color-palette-default] shadow-sm outline-none z-[1];
 * }
 *
 * .parkSlider__valueText { }
 *
 * .parkSlider__track {
 *   (@)apply bg-bg-emphasized rounded-full overflow-hidden flex-1;
 * }
 *
 * .parkSlider__range {
 *   (@)apply bg-[--colors-color-palette-default];
 * }
 *
 * .parkSlider__control {
 *   (@)apply flex relative items-center;
 * }
 *
 * .parkSlider__markerGroup {
 *   (@)apply -mt-1;
 * }
 *
 * .parkSlider__marker {
 *   (@)apply before:bg-white [&:is([data-state=under-value])]:before:bg-white dark:[&:is([data-state=under-value])]:before:bg-[--colors-color-palette-fg] before:rounded-full block relative left-1/2 -translate-x-1/2 text-fg-muted before:content-[''];
 * }
 *
 * .parkSlider__draggingIndicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/slider#anatomy)
 */
export const sliderStyledSlots = {
  base: "parkSlider",
  root: [
    "parkSlider__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1",
    "flex-col"
  ],
  label: [
    "parkSlider__label",

    // Typography
    "text-fg-default",
    "font-medium"
  ],
  thumb: [
    "parkSlider__thumb",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-full",
    "border-2",
    "border-[--colors-color-palette-default]",

    // Effects
    "shadow-sm",

    // Layout
    "outline-none",
    "z-[1]"
  ],
  valueText: "parkSlider__valueText",
  track: [
    "parkSlider__track",

    // Backgrounds
    "bg-bg-emphasized",

    // Borders
    "rounded-full",

    // Layout
    "overflow-hidden",

    // Flexbox & Grid
    "flex-1"
  ],
  range: [
    "parkSlider__range",

    // Backgrounds
    "bg-[--colors-color-palette-default]"
  ],
  control: [
    "parkSlider__control",

    // Layout
    "flex",
    "relative",

    // Flexbox & Grid
    "items-center"
  ],
  markerGroup: [
    "parkSlider__markerGroup",

    // Spacing
    "-mt-1"
  ],
  marker: [
    "parkSlider__marker",

    // Background
    "before:bg-white",
    "[&:is([data-state=under-value])]:before:bg-white",
    "dark:[&:is([data-state=under-value])]:before:bg-[--colors-color-palette-fg]",

    // Borders
    "before:rounded-full",

    // Layout
    "block",
    "relative",
    "left-1/2",

    // Transforms
    "-translate-x-1/2",

    // Typography
    "text-fg-muted",
    "before:content-['']"
  ],
  draggingIndicator: "parkSlider__draggingIndicator"
} as const satisfies Record<SliderSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("slider", sliderStyledSlots));
