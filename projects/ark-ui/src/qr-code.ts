// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/qr-code/qr-code.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/docs/components/qr-code#anatomy)
 */
export const slots = ["root", "frame", "pattern", "overlay", "downloadTrigger"] as const;

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/docs/components/qr-code#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/docs/components/qr-code#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; frame: {}; pattern: {}; overlay: {}; downloadTrigger: {} }>;
