// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Editable/index.ts

/**
 * **Editable**
 * @description Displays an input field used for editing a single line of text, rendering as static text on load.
 * @see [source](https://reka-ui.com/docs/components/editable#anatomy)
 */
export const slots = ["root", "area", "input", "preview", "submitTrigger", "cancelTrigger", "editTrigger"] as const;

/**
 * **Editable**
 * @description Displays an input field used for editing a single line of text, rendering as static text on load.
 * @see [source](https://reka-ui.com/docs/components/editable#anatomy)
 */
export type Slots = (typeof slots)[number];
