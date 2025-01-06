import { type GSProps, generateSlots } from "@spark-css/utils";
import { anatomy as hoverCardAnatomy } from "@zag-js/hover-card";

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const createHoverCardSlots = (props?: GSProps) => generateSlots("hover-card", hoverCardAnatomy.keys(), props);

/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export type HoverCardSlots = keyof ReturnType<typeof createHoverCardSlots>;
