// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toolbar/index.ts

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, Toolbar groups or dropdown menus.
 * @see [source](https://reka-ui.com/docs/components/toolbar#anatomy)
 */
export const slots = ["root", "button", "link", "toggleGroup", "toggleItem", "separator"] as const;

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, Toolbar groups or dropdown menus.
 * @see [source](https://reka-ui.com/docs/components/toolbar#anatomy)
 */
export type Slots = (typeof slots)[number];
