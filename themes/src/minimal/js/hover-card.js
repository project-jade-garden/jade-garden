import { createSlots } from "@spark-css/core/hover-card";
/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 *
 * @returns
 * ```js
 * {
 *   base: "hover-card",
 *   arrow: "hover-card__arrow",
 *   arrowTip: "hover-card__arrow-tip",
 *   trigger: "hover-card__trigger",
 *   positioner: "hover-card__positioner",
 *   content: "hover-card__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/hover-card").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  arrow: slots.arrow,
  arrowTip: slots.arrowTip,
  trigger: slots.trigger,
  positioner: slots.positioner,
  content: slots.content
};
/**
 * **Hover Card**
 * @description A card that appears when a user hovers over an element.
 *
 * @example
 * ```css
 * .hover-card { }
 *
 * .hover-card__arrow { }
 *
 * .hover-card__arrow-tip { }
 *
 * .hover-card__trigger { }
 *
 * .hover-card__positioner { }
 *
 * .hover-card__content { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/hover-card#anatomy)
 */
export const hoverCardStyles = styledSlots;
