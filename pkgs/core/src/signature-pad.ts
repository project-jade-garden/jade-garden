import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as signaturePadAnatomy } from "@zag-js/signature-pad";

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export const createSignaturePadSlots = (props?: GSProps) =>
  generateSlots("signature-pad", signaturePadAnatomy.keys(), props);

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export type SignaturePadSlots = keyof ReturnType<typeof createSignaturePadSlots>;
