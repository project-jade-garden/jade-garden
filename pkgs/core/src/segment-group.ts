import { type GSProps, generateSlots } from "@spark-css/utils";
// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/segment-group/segment-group.anatomy.ts
import { anatomy } from "@zag-js/radio-group";

const segmentGroupAnatomy = anatomy.rename("segment-group");

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export const createSegmentGroupSlots = (props?: GSProps) =>
  generateSlots("segment-group", segmentGroupAnatomy.keys(), props);

/**
 * **Segment Group**
 * @description Organizes and navigates between sections in a view.
 * @see [source](https://ark-ui.com/vue/docs/components/segment-group#anatomy)
 */
export type SegmentGroupSlots = keyof ReturnType<typeof createSegmentGroupSlots>;
