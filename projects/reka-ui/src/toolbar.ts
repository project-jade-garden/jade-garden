// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Toolbar/index.ts
import type { SVATraits } from "jade-garden";

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

/**
 * **Toolbar**
 * @description A container for grouping a set of controls, such as buttons, Toolbar groups or dropdown menus.
 * @see [source](https://reka-ui.com/docs/components/toolbar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { root: {}; button: {}; link: {}; toggleGroup: {}; toggleItem: {}; separator: {} }
>;
