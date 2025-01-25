// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/progress.ts
import { createSlots } from "@spark-css/core/progress";
/**
 * **Progress**
 * @description
 * **Circular** - An element that shows either determinate or indeterminate progress.
 * **Linear** - An element that shows either determinate or indeterminate progress.
 *
 * @returns
 * ```js
 * {
 *   base: "parkProgress",
 *   root: "parkProgress__root",
 *   label: "parkProgress__label",
 *   track: "parkProgress__track",
 *   range: "parkProgress__range",
 *   valueText: "parkProgress__valueText",
 *   view: "parkProgress__view",
 *   circle: "parkProgress__circle",
 *   circleTrack: "parkProgress__circleTrack",
 *   circleRange: "parkProgress__circleRange"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/progress#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/progress").Slots} Slots
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
    "gap-1.5",
    "items-center",
    "flex-col"
  ],
  label: [
    slots.label,
    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  track: [
    slots.track,
    // Sizing
    "w-full",
    // Backgrounds
    "bg-bg-emphasized",
    // Borders
    "rounded-l2",
    // Layout
    "overflow-hidden"
  ],
  range: [
    slots.range,
    // Sizing
    "h-full",
    // Backgrounds
    "bg-[--colors-color-palette-default]",
    // Transitions & Animation
    "[transition:width_.2s_ease-in-out]"
  ],
  valueText: [
    slots.valueText,
    // Typography
    "text-sm"
  ],
  view: slots.view,
  circle: slots.circle,
  circleTrack: [
    slots.circleTrack,
    // SVG
    "stroke-bg-emphasized"
  ],
  circleRange: [
    slots.circleRange,
    // SVG
    "stroke-[--colors-color-palette-default]",
    // Transitions & Animation
    "transition-[stroke-dasharray,_stroke]",
    "duration-[600ms]"
  ]
};
/**
 * **Progress**
 * @description
 * **Circular** - An element that shows either determinate or indeterminate progress.
 * **Linear** - An element that shows either determinate or indeterminate progress.
 *
 * @example
 * ```css
 * .parkProgress { }
 *
 * .parkProgress__root {
 *   (@)apply w-full flex gap-1.5 items-center flex-col;
 * }
 *
 * .parkProgress__label {
 *   (@)apply text-fg-default text-sm font-medium;
 * }
 *
 * .parkProgress__track {
 *   (@)apply w-full bg-bg-emphasized rounded-l2 overflow-hidden;
 * }
 *
 * .parkProgress__range {
 *   (@)apply h-full bg-[--colors-color-palette-default] [transition:width_.2s_ease-in-out];
 * }
 *
 * .parkProgress__valueText {
 *   (@)apply text-sm;
 * }
 *
 * .parkProgress__view { }
 *
 * .parkProgress__circle { }
 *
 * .parkProgress__circleTrack {
 *   (@)apply stroke-bg-emphasized;
 * }
 *
 * .parkProgress__circleRange {
 *   (@)apply stroke-[--colors-color-palette-default] transition-[stroke-dasharray,_stroke] duration-[600ms];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/progress#anatomy)
 */
export const progress = styledSlots;
