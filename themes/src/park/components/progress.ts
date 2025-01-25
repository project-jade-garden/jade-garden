// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/progress.ts
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/progress";

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
export const progressSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", progressSlots);

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
export const progressStyledSlots = {
  base: "parkProgress",
  root: [
    "parkProgress__root",

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
    "parkProgress__label",

    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  track: [
    "parkProgress__track",

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
    "parkProgress__range",

    // Sizing
    "h-full",

    // Backgrounds
    "bg-[--colors-color-palette-default]",

    // Transitions & Animation
    "[transition:width_.2s_ease-in-out]"
  ],
  valueText: [
    "parkProgress__valueText",

    // Typography
    "text-sm"
  ],
  view: "parkProgress__view",
  circle: "parkProgress__circle",
  circleTrack: [
    "parkProgress__circleTrack",

    // SVG
    "stroke-bg-emphasized"
  ],
  circleRange: [
    "parkProgress__circleRange",

    // SVG
    "stroke-[--colors-color-palette-default]",

    // Transitions & Animation
    "transition-[stroke-dasharray,_stroke]",
    "duration-[600ms]"
  ]
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", progressStyledSlots);
