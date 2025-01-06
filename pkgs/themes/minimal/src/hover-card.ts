import { type HoverCardSlots, createHoverCardSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const hoverCardSlots = createHoverCardSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("hover-card", hoverCardSlots));

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
export const hoverCardStyledSlots = {
  base: "hover-card",
  arrow: "hover-card__arrow",
  arrowTip: "hover-card__arrow-tip",
  trigger: "hover-card__trigger",
  positioner: "hover-card__positioner",
  content: "hover-card__content"
} as const satisfies Record<HoverCardSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("hover-card", hoverCardStyledSlots));
