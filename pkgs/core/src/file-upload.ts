import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
import { anatomy as fileUploadAnatomy } from "@zag-js/file-upload";

const component = {
  name: "File Upload",
  description: "A component that is used to upload multiple files."
};
const source = "https://ark-ui.com/vue/docs/components/file-upload#anatomy";

export type FileUploadSlots = keyof ReturnType<typeof createFileUploadSlots>;

export const createFileUploadSlots = (args?: CSArgs) => createSlots("file-upload", fileUploadAnatomy.keys(), args);

export const createFileUploadDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
