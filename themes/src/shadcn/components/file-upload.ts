// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/file-upload.ts
import { type Slots, createSlots } from "@spark-css/core/file-upload";

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 *
 * @returns
 * ```js
 * {
 *   base: "parkFileUpload",
 *   root: "parkFileUpload__root",
 *   dropzone: "parkFileUpload__dropzone",
 *   item: "parkFileUpload__item",
 *   itemDeleteTrigger: "parkFileUpload__itemDeleteTrigger",
 *   itemGroup: "parkFileUpload__itemGroup",
 *   itemName: "parkFileUpload__itemName",
 *   itemPreview: "parkFileUpload__itemPreview",
 *   itemPreviewImage: "parkFileUpload__itemPreviewImage",
 *   itemSizeText: "parkFileUpload__itemSizeText",
 *   label: "parkFileUpload__label",
 *   trigger: "parkFileUpload__trigger",
 *   clearTrigger: "parkFileUpload__clearTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * @typedef {import("@spark-css/core/file-upload").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "parkFileUpload",
  root: [
    "parkFileUpload__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-4",
    "flex-col"
  ],
  dropzone: [
    "parkFileUpload__dropzone",

    // Spacing
    "px-6",
    "py-4",

    // Sizing
    "min-h-80",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "border",
    "rounded-l3",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-3",
    "flex-col",
    "items-center",
    "justify-center"
  ],
  item: [
    "parkFileUpload__item",

    // Spacing
    "p-4",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "border",
    "rounded-l3",

    // Layout
    "grid",

    // Flexbox & Grid
    "gap-x-3",
    "grid-cols-[auto_1fr_auto]",
    "[grid-template-areas:'preview_name_delete'_'preview_size_delete']",

    // Transitions & Animation
    "animate-fade-in"
  ],
  itemDeleteTrigger: [
    "parkFileUpload__itemDeleteTrigger",

    // Flexbox & Grid
    "[grid-area:delete]",
    "self-start"
  ],
  itemGroup: [
    "parkFileUpload__itemGroup",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-3",
    "flex-col"
  ],
  itemName: [
    "parkFileUpload__itemName",

    // Flexbox & Grid
    "[grid-area:name]",

    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  itemPreview: [
    "parkFileUpload__itemPreview",

    // Flexbox & Grid
    "[grid-area:preview]"
  ],
  itemPreviewImage: [
    "parkFileUpload__itemPreviewImage",

    // Sizing
    "size-10",

    // Layout
    "aspect-square",
    "object-scale-down"
  ],
  itemSizeText: [
    "parkFileUpload__itemSizeText",

    // Flexbox & Grid
    "[grid-area:size]",

    // Typography
    "text-fg-muted",
    "text-sm"
  ],
  label: [
    "parkFileUpload__label",

    // Typography
    "text-sm",
    "font-medium"
  ],
  trigger: "parkFileUpload__trigger",
  clearTrigger: "parkFileUpload__clearTrigger"
} satisfies Record<Slots, string | string[]>;

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 *
 * @example
 * ```css
 * .parkFileUpload { }
 *
 * .parkFileUpload__root {
 *   (@)apply w-full flex gap-4 flex-col;
 * }
 *
 * .parkFileUpload__dropzone {
 *   (@)apply px-6 py-4 min-h-80 bg-bg-default border rounded-l3 flex gap-3 flex-col items-center justify-center;
 * }
 *
 * .parkFileUpload__item {
 *   (@)apply p-4 bg-bg-default border rounded-l3 grid gap-x-3 grid-cols-[auto_1fr_auto] [grid-template-areas:'preview_name_delete'_'preview_size_delete'] animate-fade-in;
 * }
 *
 * .parkFileUpload__itemDeleteTrigger {
 *   (@)apply [grid-area:delete] self-start;
 * }
 *
 * .parkFileUpload__itemGroup {
 *   (@)apply flex gap-3 flex-col;
 * }
 *
 * .parkFileUpload__itemName {
 *   (@)apply [grid-area:name] text-fg-default text-sm font-medium;
 * }
 *
 * .parkFileUpload__itemPreview {
 *   (@)apply [grid-area:preview];
 * }
 *
 * .parkFileUpload__itemPreviewImage {
 *   (@)apply size-10 aspect-square object-scale-down;
 * }
 *
 * .parkFileUpload__itemSizeText {
 *   (@)apply [grid-area:size] text-fg-muted text-sm;
 * }
 *
 * .parkFileUpload__label {
 *   (@)apply text-sm font-medium;
 * }
 *
 * .parkFileUpload__trigger { }
 *
 * .parkFileUpload__clearTrigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export const fileUpload = styledSlots;
