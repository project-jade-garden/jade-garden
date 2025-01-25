import { type Slots, createSlots } from "@spark-css/core/file-upload";

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 *
 * @returns
 * ```js
 * {
 *   base: "file-upload",
 *   root: "file-upload__root",
 *   dropzone: "file-upload__dropzone",
 *   item: "file-upload__item",
 *   itemDeleteTrigger: "file-upload__item-delete-trigger",
 *   itemGroup: "file-upload__item-group",
 *   itemName: "file-upload__item-name",
 *   itemPreview: "file-upload__item-preview",
 *   itemPreviewImage: "file-upload__item-preview-image",
 *   itemSizeText: "file-upload__item-size-text",
 *   label: "file-upload__label",
 *   trigger: "file-upload__trigger",
 *   clearTrigger: "file-upload__clear-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "file-upload",
  root: "file-upload__root",
  dropzone: "file-upload__dropzone",
  item: "file-upload__item",
  itemDeleteTrigger: "file-upload__item-delete-trigger",
  itemGroup: "file-upload__item-group",
  itemName: "file-upload__item-name",
  itemPreview: "file-upload__item-preview",
  itemPreviewImage: "file-upload__item-preview-image",
  itemSizeText: "file-upload__item-size-text",
  label: "file-upload__label",
  trigger: "file-upload__trigger",
  clearTrigger: "file-upload__clear-trigger"
} satisfies Record<Slots, string | string[]>;

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 *
 * @example
 * ```css
 * .file-upload { }
 *
 * .file-upload__root { }
 *
 * .file-upload__dropzone { }
 *
 * .file-upload__item { }
 *
 * .file-upload__item-delete-trigger { }
 *
 * .file-upload__item-group { }
 *
 * .file-upload__item-name { }
 *
 * .file-upload__item-preview { }
 *
 * .file-upload__item-preview-image { }
 *
 * .file-upload__item-size-text { }
 *
 * .file-upload__label { }
 *
 * .file-upload__trigger { }
 *
 * .file-upload__clear-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export const fileUpload = styledSlots;
