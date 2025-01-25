import { type Slots, createSlots } from "@spark-css/core/tooltip";

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 *
 * @returns
 * ```js
 * {
 *   base: "tooltip",
 *   trigger: "tooltip__trigger",
 *   arrow: "tooltip__arrow",
 *   arrowTip: "tooltip__arrow-tip",
 *   positioner: "tooltip__positioner",
 *   content: "tooltip__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/tooltip").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  trigger: slots.trigger,
  arrow: slots.arrow,
  arrowTip: slots.arrowTip,
  positioner: slots.positioner,
  content: slots.content
} satisfies Record<Slots, string | string[]>;

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 *
 * @example
 * ```css
 * .tooltip { }
 *
 * .tooltip__trigger { }
 *
 * .tooltip__arrow { }
 *
 * .tooltip__arrow-tip { }
 *
 * .tooltip__positioner { }
 *
 * .tooltip__content { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export const tooltip = styledSlots;
