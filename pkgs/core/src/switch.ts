import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as switchAnatomy } from "@zag-js/switch";

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export const createSwitchSlots = (props?: GSProps) => generateSlots("switch", switchAnatomy.keys(), props);

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export type SwitchSlots = keyof ReturnType<typeof createSwitchSlots>;
