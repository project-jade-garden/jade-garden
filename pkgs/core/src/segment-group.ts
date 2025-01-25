import {
  type CSArgs,
  type PrintType,
  type Slots as UtilSlots,
  createDocs as utilDocs,
  createSlots as utilSlots
} from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts
import { anatomy } from "@zag-js/radio-group";

const segmentGroupAnatomy = anatomy.rename("segment-group");

const component = {
  name: "Segment Group",
  description: "Organizes and navigates between sections in a view."
};
const source = "https://ark-ui.com/vue/docs/components/segment-group#anatomy";

export type Slots = keyof ReturnType<typeof createSlots>;

export const createSlots = (args?: CSArgs) => utilSlots("segment-group", segmentGroupAnatomy.keys(), args);

export const createDocs = (print: PrintType, slots: UtilSlots = {}) => utilDocs(print, { slots, component, source });
