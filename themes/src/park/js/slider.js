// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/slider.ts
import { createSlots } from "@spark-css/core/slider";
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
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/slider").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Sizing
    "w-full",
    // Layout
    "flex",
    // Flexbox & Grid
    "gap-1",
    "flex-col"
  ],
  label: [
    slots.label,
    // Typography
    "text-fg-default",
    "font-medium"
  ],
  thumb: [
    slots.thumb,
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
  valueText: slots.valueText,
  track: [
    slots.track,
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
    slots.range,
    // Backgrounds
    "bg-[--colors-color-palette-default]"
  ],
  control: [
    slots.control,
    // Layout
    "flex",
    "relative",
    // Flexbox & Grid
    "items-center"
  ],
  markerGroup: [
    slots.markerGroup,
    // Spacing
    "-mt-1"
  ],
  marker: [
    slots.marker,
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
  draggingIndicator: slots.draggingIndicator
};
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
export const slider = styledSlots;
