import { type Slots, createSlots } from "@spark-css/core/hover-card";

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

const styledSlots = {
  base: "hover-card",
  arrow: "hover-card__arrow",
  arrowTip: "hover-card__arrow-tip",
  trigger: "hover-card__trigger",
  positioner: "hover-card__positioner",
  content: "hover-card__content"
} satisfies Record<Slots, string | string[]>;

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
export const hoverCard = styledSlots;
