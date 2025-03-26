// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/file-field/index.tsx

/**
 * **File Field**
 * @description A file input to upload multiple files, with ability to drag and drop files.
 * @see [source](https://kobalte.dev/docs/core/components/file-field#anatomy)
 */
export const slots = [
  "root",
  "context",
  "dropzone",
  "hiddenInput",
  "label",
  "trigger",
  "itemList",
  "item",
  "itemPreview",
  "itemPreviewImage",
  "itemSize",
  "itemDeleteTrigger",
  "itemName",
  "description",
  "errorMessage"
] as const;

/**
 * **File Field**
 * @description A file input to upload multiple files, with ability to drag and drop files.
 * @see [source](https://kobalte.dev/docs/core/components/file-field#anatomy)
 */
export type Slots = (typeof slots)[number];
