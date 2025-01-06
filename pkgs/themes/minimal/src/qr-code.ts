import { type QrCodeSlots, createQrCodeSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
 *   overlay: "qr-code__overlay"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCodeSlots = createQrCodeSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("qr-code", qrCodeSlots));

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
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCodeStyledSlots = {
  base: "qr-code",
  root: "qr-code__root",
  frame: "qr-code__frame",
  pattern: "qr-code__pattern",
  overlay: "qr-code__overlay"
} as const satisfies Record<QrCodeSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("qr-code", qrCodeStyledSlots));
