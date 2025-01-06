import { type TooltipSlots, createTooltipSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const tooltipSlots = createTooltipSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("tooltip", tooltipSlots));

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
export const tooltipStyledSlots = {
  base: "tooltip",
  trigger: "tooltip__trigger",
  arrow: "tooltip__arrow",
  arrowTip: "tooltip__arrow-tip",
  positioner: "tooltip__positioner",
  content: "tooltip__content"
} as const satisfies Record<TooltipSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("tooltip", tooltipStyledSlots));
