// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/file-upload/file-upload.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "label",
  "item",
  "itemGroup",
  "clearTrigger",
  "dropzone",
  "itemDeleteTrigger",
  "itemName",
  "itemPreview",
  "itemPreviewImage",
  "itemSizeText"
] as const;

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
