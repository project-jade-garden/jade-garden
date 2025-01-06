import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as clipboardAnatomy } from "@zag-js/clipboard";

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export const createClipboardSlots = (props?: GSProps) => generateSlots("clipboard", clipboardAnatomy.keys(), props);

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export type ClipboardSlots = keyof ReturnType<typeof createClipboardSlots>;
