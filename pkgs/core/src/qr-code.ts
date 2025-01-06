import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as qrCodeAnatomy } from "@zag-js/qr-code";

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const createQrCodeSlots = (props?: GSProps) => generateSlots("qr-code", qrCodeAnatomy.keys(), props);

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export type QrCodeSlots = keyof ReturnType<typeof createQrCodeSlots>;
