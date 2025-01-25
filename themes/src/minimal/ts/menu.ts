import { type Slots, createSlots } from "@spark-css/core/menu";

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
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/menu").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  arrow: slots.arrow,
  arrowTip: slots.arrowTip,
  content: slots.content,
  contextTrigger: slots.contextTrigger,
  indicator: slots.indicator,
  item: slots.item,
  itemGroup: slots.itemGroup,
  itemGroupLabel: slots.itemGroupLabel,
  itemIndicator: slots.itemIndicator,
  itemText: slots.itemText,
  positioner: slots.positioner,
  separator: slots.separator,
  trigger: slots.trigger,
  triggerItem: slots.triggerItem
} satisfies Record<Slots, string | string[]>;

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
export const menu = styledSlots;
