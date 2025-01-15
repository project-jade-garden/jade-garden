import {
  type QrCodeSlots,
  // createQrCodeDocs,
  createQrCodeSlots
} from "@spark-css/core";

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @returns
 * ```js
 * {
 *   base: "qr-code",
 *   root: "qr-code__root",
 *   frame: "qr-code__frame",
 *   pattern: "qr-code__pattern",
 *   overlay: "qr-code__overlay",
 *   downloadTrigger: "qr-code__download-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCodeSlots = createQrCodeSlots({});

// * Uncomment before styling slots
// createQrCodeDocs("anatomy", qrCodeSlots);

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @example
 * ```css
 * .qr-code { }
 *
 * .qr-code__root { }
 *
 * .qr-code__frame { }
 *
 * .qr-code__pattern { }
 *
 * .qr-code__overlay { }
 *
 * .qr-code__download-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCodeStyledSlots = {
  base: "qr-code",
  root: "qr-code__root",
  frame: "qr-code__frame",
  pattern: "qr-code__pattern",
  overlay: "qr-code__overlay",
  downloadTrigger: "qr-code__download-trigger"
} as const satisfies Record<QrCodeSlots, string | string[]>;

// * Uncomment after styling slots
// createQrCodeDocs("styled", qrCodeStyledSlots);
