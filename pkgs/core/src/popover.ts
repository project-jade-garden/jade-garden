import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as popoverAnatomy } from "@zag-js/popover";

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const createPopoverSlots = (props?: GSProps) => generateSlots("popover", popoverAnatomy.keys(), props);

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export type PopoverSlots = keyof ReturnType<typeof createPopoverSlots>;
