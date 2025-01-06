import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as pinInputAnatomy } from "@zag-js/pin-input";

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const createPinInputSlots = (props?: GSProps) => generateSlots("pin-input", pinInputAnatomy.keys(), props);

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export type PinInputSlots = keyof ReturnType<typeof createPinInputSlots>;
