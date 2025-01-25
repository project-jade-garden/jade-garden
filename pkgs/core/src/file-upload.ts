import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
import { anatomy as fileUploadAnatomy } from "@zag-js/file-upload";

const component = {
  name: "File Upload",
  description: "A component that is used to upload multiple files."
};
const source = "https://ark-ui.com/vue/docs/components/file-upload#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("file-upload", fileUploadAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
