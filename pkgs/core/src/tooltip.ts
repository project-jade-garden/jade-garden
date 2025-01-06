import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as tooltipAnatomy } from "@zag-js/tooltip";

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export const createTooltipSlots = (props?: GSProps) => generateSlots("tooltip", tooltipAnatomy.keys(), props);

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export type TooltipSlots = keyof ReturnType<typeof createTooltipSlots>;
