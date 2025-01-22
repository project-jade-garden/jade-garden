import {
  type PopoverSlots,
  // createPopoverDocs,
  createPopoverSlots
} from "@spark-css/core";

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 *
 * @returns
 * ```js
 * {
 *   base: "popover",
 *   arrow: "popover__arrow",
 *   arrowTip: "popover__arrow-tip",
 *   anchor: "popover__anchor",
 *   trigger: "popover__trigger",
 *   indicator: "popover__indicator",
 *   positioner: "popover__positioner",
 *   content: "popover__content",
 *   title: "popover__title",
 *   description: "popover__description",
 *   closeTrigger: "popover__close-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const popoverSlots = createPopoverSlots({});

// * Uncomment before styling slots
// createPopoverDocs("anatomy", popoverSlots);

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 *
 * @example
 * ```css
 * .popover { }
 *
 * .popover__arrow { }
 *
 * .popover__arrow-tip { }
 *
 * .popover__anchor { }
 *
 * .popover__trigger { }
 *
 * .popover__indicator { }
 *
 * .popover__positioner { }
 *
 * .popover__content { }
 *
 * .popover__title { }
 *
 * .popover__description { }
 *
 * .popover__close-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const popoverStyledSlots = {
  base: "popover",
  arrow: "popover__arrow",
  arrowTip: "popover__arrow-tip",
  anchor: "popover__anchor",
  trigger: "popover__trigger",
  indicator: "popover__indicator",
  positioner: "popover__positioner",
  content: "popover__content",
  title: "popover__title",
  description: "popover__description",
  closeTrigger: "popover__close-trigger"
} as const satisfies Record<PopoverSlots, string | string[]>;

// * Uncomment after styling slots
// createPopoverDocs("styled", popoverStyledSlots);
