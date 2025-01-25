// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/signature-pad.demo.tsx
import { createSlots } from "@spark-css/core/signature-pad";
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
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef {import("@spark-css/core/signature-pad").Slots} Slots
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
        "flex-col"
    ],
    control: [
        slots.control,
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
        slots.segment,
        // SVG
        "fill-fg-default"
    ],
    segmentPath: slots.segmentPath,
    guide: [
        slots.guide,
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
        slots.clearTrigger,
        // Layout
        "absolute",
        "top-3",
        "right-3"
    ],
    label: [
        slots.label,
        // Typography
        "text-sm",
        "text-fg-default",
        "font-medium"
    ]
};
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
export const signaturePad = styledSlots;
