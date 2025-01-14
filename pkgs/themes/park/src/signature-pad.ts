// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/signature-pad.demo.tsx
import {
  type SignaturePadSlots,
  // createSignaturePadDocs,
  createSignaturePadSlots
} from "@spark-css/core";

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 *
 * @returns
 * ```js
 * {
 *   base: "parkSignaturePad",
 *   root: "parkSignaturePad__root",
 *   control: "parkSignaturePad__control",
 *   segment: "parkSignaturePad__segment",
 *   segmentPath: "parkSignaturePad__segmentPath",
 *   guide: "parkSignaturePad__guide",
 *   clearTrigger: "parkSignaturePad__clearTrigger",
 *   label: "parkSignaturePad__label"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export const signaturePadSlots = createSignaturePadSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createSignaturePadDocs("anatomy", signaturePadSlots);

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 *
 * @example
 * ```css
 * .parkSignaturePad { }
 *
 * .parkSignaturePad__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkSignaturePad__control {
 *   (@)apply min-h-52 min-w-0 bg-bg-subtle rounded-l2 border relative;
 * }
 *
 * .parkSignaturePad__segment {
 *   (@)apply fill-fg-default;
 * }
 *
 * .parkSignaturePad__segmentPath { }
 *
 * .parkSignaturePad__guide {
 *   (@)apply border-b border-[--colors-gray-8] border-dashed absolute bottom-6 left-6 right-6;
 * }
 *
 * .parkSignaturePad__clearTrigger {
 *   (@)apply absolute top-3 right-3;
 * }
 *
 * .parkSignaturePad__label {
 *   (@)apply text-sm text-fg-default font-medium;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export const signaturePadStyledSlots = {
  base: "parkSignaturePad",
  root: [
    "parkSignaturePad__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  control: [
    "parkSignaturePad__control",

    // Sizing
    "min-h-52",
    "min-w-0",

    // Backgrounds
    "bg-bg-subtle",

    // Borders
    "rounded-l2",
    "border",

    // Layout
    "relative"
  ],
  segment: [
    "parkSignaturePad__segment",

    // SVG
    "fill-fg-default"
  ],
  segmentPath: "parkSignaturePad__segmentPath",
  guide: [
    "parkSignaturePad__guide",

    // Borders
    "border-b",
    "border-[--colors-gray-8]",
    "border-dashed",

    // Layout
    "absolute",
    "bottom-6",
    "left-6",
    "right-6"
  ],
  clearTrigger: [
    "parkSignaturePad__clearTrigger",

    // Layout
    "absolute",
    "top-3",
    "right-3"
  ],
  label: [
    "parkSignaturePad__label",

    // Typography
    "text-sm",
    "text-fg-default",
    "font-medium"
  ]
} as const satisfies Record<SignaturePadSlots, string | string[]>;

// * Uncomment after styling slots
// createSignaturePadDocs("styled", signaturePadStyledSlots);
