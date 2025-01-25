import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/checkbox/checkbox.anatomy.ts
import { anatomy } from "@zag-js/checkbox";

const checkboxAnatomy = anatomy.extendWith("group");

const component = {
  name: "Checkbox",
  description: "A control element that allows for multiple selections within a set."
};
const source = "https://ark-ui.com/vue/docs/components/checkbox#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("checkbox", checkboxAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
