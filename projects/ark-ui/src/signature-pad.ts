// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/signature-pad/signature-pad.anatomy.ts

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/docs/components/signature-pad#anatomy)
 */
export const slots = ["root", "control", "segment", "segmentPath", "guide", "clearTrigger", "label"] as const;

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/docs/components/signature-pad#anatomy)
 */
export type Slots = (typeof slots)[number];
