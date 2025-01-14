import { type CSArgs, type PrintType, type Slots, createDocs, createSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts
import { anatomy } from "@zag-js/radio-group";

const segmentGroupAnatomy = anatomy.rename("segment-group");

const component = {
  name: "Segment Group",
  description: "Organizes and navigates between sections in a view."
};
const source = "https://ark-ui.com/vue/docs/components/segment-group#anatomy";

export type SegmentGroupSlots = keyof ReturnType<typeof createSegmentGroupSlots>;

export const createSegmentGroupSlots = (args?: CSArgs) =>
  createSlots("segment-group", segmentGroupAnatomy.keys(), args);

export const createSegmentGroupDocs = (print: PrintType, slots: Slots = {}) =>
  createDocs(print, { slots, component, source });
