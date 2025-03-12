// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/signature-pad/signature-pad.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export const slots = ["root", "label", "control", "clearTrigger", "segment", "segmentPath", "guide"] as const;

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
