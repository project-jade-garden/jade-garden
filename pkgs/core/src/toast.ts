import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as toastAnatomy } from "@zag-js/toast";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const createToastSlots = (props?: GSProps) => generateSlots("toast", toastAnatomy.keys(), props);

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export type ToastSlots = keyof ReturnType<typeof createToastSlots>;
