// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/RovingFocus/index.ts

/**
 * **Roving Focus**
 * @description Utility component that implements the roving tabindex method to manage focus between items.
 * @see [source](https://reka-ui.com/docs/utilities/roving-focus#anatomy)
 */
export const slots = ["group", "item"] as const;

/**
 * **Roving Focus**
 * @description Utility component that implements the roving tabindex method to manage focus between items.
 * @see [source](https://reka-ui.com/docs/utilities/roving-focus#anatomy)
 */
export type Slots = (typeof slots)[number];
