import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as fileUploadAnatomy } from "@zag-js/file-upload";

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export const createFileUploadSlots = (props?: GSProps) => generateSlots("file-upload", fileUploadAnatomy.keys(), props);

/**
 * **File Upload**
 * @description A component that is used to upload multiple files.
 * @see [source](https://ark-ui.com/vue/docs/components/file-upload#anatomy)
 */
export type FileUploadSlots = keyof ReturnType<typeof createFileUploadSlots>;
