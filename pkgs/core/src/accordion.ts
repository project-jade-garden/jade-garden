import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as accordionAnatomy } from "@zag-js/accordion";

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const createAccordionSlots = (props?: GSProps) => generateSlots("accordion", accordionAnatomy.keys(), props);

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export type AccordionSlots = keyof ReturnType<typeof createAccordionSlots>;
