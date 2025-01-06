import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as dialogAnatomy } from "@zag-js/dialog";

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export const createDialogSlots = (props?: GSProps) => generateSlots("dialog", dialogAnatomy.keys(), props);

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export type DialogSlots = keyof ReturnType<typeof createDialogSlots>;
