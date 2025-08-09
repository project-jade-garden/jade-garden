// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/file-upload/file-upload.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/docs/components/file-upload#anatomy)
 */
export const slots = [
  "root",
  "dropzone",
  "item",
  "itemDeleteTrigger",
  "itemGroup",
  "itemName",
  "itemPreview",
  "itemPreviewImage",
  "itemSizeText",
  "label",
  "trigger",
  "clearTrigger"
] as const;

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/docs/components/file-upload#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/docs/components/file-upload#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "file-upload";
      part: "root";
      disabled: "";
      dragging: "";
    };
    dropzone: {
      scope: "file-upload";
      part: "dropzone";
      invalid: "";
      disabled: "";
      dragging: "";
    };
    item: {
      scope: "file-upload";
      part: "item";
      disabled: "";
    };
    itemDeleteTrigger: {
      scope: "file-upload";
      part: "item-delete-trigger";
      disabled: "";
    };
    itemGroup: {
      scope: "file-upload";
      part: "item-group";
      disabled: "";
    };
    itemName: {
      scope: "file-upload";
      part: "item-name";
      disabled: "";
    };
    itemPreview: {
      scope: "file-upload";
      part: "item-preview";
      disabled: "";
    };
    itemPreviewImage: {
      scope: "file-upload";
      part: "item-preview-image";
      disabled: "";
    };
    itemSizeText: {
      scope: "file-upload";
      part: "item-size-text";
      disabled: "";
    };
    label: {
      scope: "file-upload";
      part: "label";
      disabled: "";
    };
    trigger: {
      scope: "file-upload";
      part: "trigger";
      disabled: "";
      invalid: "";
    };
    clearTrigger: {
      scope: "file-upload";
      part: "clear-trigger";
      disabled: "";
    };
  }
>;
