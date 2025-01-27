// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/file-upload.ts
import { createSlots } from "@spark-css/core/file-upload";
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
 * @typedef { import("@spark-css/core/file-upload").Slots } Slots
 * @type { Record<Slots, string | string[]> }
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
    "gap-4",
    "flex-col"
  ],
  dropzone: [
    slots.dropzone,
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
    slots.item,
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
    slots.itemDeleteTrigger,
    // Flexbox & Grid
    "[grid-area:delete]",
    "self-start"
  ],
  itemGroup: [
    slots.itemGroup,
    // Layout
    "flex",
    // Flexbox & Grid
    "gap-3",
    "flex-col"
  ],
  itemName: [
    slots.itemName,
    // Flexbox & Grid
    "[grid-area:name]",
    // Typography
    "text-fg-default",
    "text-sm",
    "font-medium"
  ],
  itemPreview: [
    slots.itemPreview,
    // Flexbox & Grid
    "[grid-area:preview]"
  ],
  itemPreviewImage: [
    slots.itemPreviewImage,
    // Sizing
    "size-10",
    // Layout
    "aspect-square",
    "object-scale-down"
  ],
  itemSizeText: [
    slots.itemSizeText,
    // Flexbox & Grid
    "[grid-area:size]",
    // Typography
    "text-fg-muted",
    "text-sm"
  ],
  label: [
    slots.label,
    // Typography
    "text-sm",
    "font-medium"
  ],
  trigger: slots.trigger,
  clearTrigger: slots.clearTrigger
};
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
export const fileUploadStyles = styledSlots;
