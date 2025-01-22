import {
  type MenuSlots,
  // createMenuDocs,
  createMenuSlots
} from "@spark-css/core";

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 *
 * @returns
 * ```js
 * {
 *   base: "menu",
 *   arrow: "menu__arrow",
 *   arrowTip: "menu__arrow-tip",
 *   content: "menu__content",
 *   contextTrigger: "menu__context-trigger",
 *   indicator: "menu__indicator",
 *   item: "menu__item",
 *   itemGroup: "menu__item-group",
 *   itemGroupLabel: "menu__item-group-label",
 *   itemIndicator: "menu__item-indicator",
 *   itemText: "menu__item-text",
 *   positioner: "menu__positioner",
 *   separator: "menu__separator",
 *   trigger: "menu__trigger",
 *   triggerItem: "menu__trigger-item"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const menuSlots = createMenuSlots({});

// * Uncomment before styling slots
// createMenuDocs("anatomy", menuSlots);

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 *
 * @example
 * ```css
 * .menu { }
 *
 * .menu__arrow { }
 *
 * .menu__arrow-tip { }
 *
 * .menu__content { }
 *
 * .menu__context-trigger { }
 *
 * .menu__indicator { }
 *
 * .menu__item { }
 *
 * .menu__item-group { }
 *
 * .menu__item-group-label { }
 *
 * .menu__item-indicator { }
 *
 * .menu__item-text { }
 *
 * .menu__positioner { }
 *
 * .menu__separator { }
 *
 * .menu__trigger { }
 *
 * .menu__trigger-item { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const menuStyledSlots = {
  base: "menu",
  arrow: "menu__arrow",
  arrowTip: "menu__arrow-tip",
  content: "menu__content",
  contextTrigger: "menu__context-trigger",
  indicator: "menu__indicator",
  item: "menu__item",
  itemGroup: "menu__item-group",
  itemGroupLabel: "menu__item-group-label",
  itemIndicator: "menu__item-indicator",
  itemText: "menu__item-text",
  positioner: "menu__positioner",
  separator: "menu__separator",
  trigger: "menu__trigger",
  triggerItem: "menu__trigger-item"
} as const satisfies Record<MenuSlots, string | string[]>;

// * Uncomment after styling slots
// createMenuDocs("styled", menuStyledSlots);
