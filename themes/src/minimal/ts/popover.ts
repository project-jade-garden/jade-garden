import { type Slots, createSlots } from "@spark-css/core/popover";

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
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/popover").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  arrow: slots.arrow,
  arrowTip: slots.arrowTip,
  anchor: slots.anchor,
  trigger: slots.trigger,
  indicator: slots.indicator,
  positioner: slots.positioner,
  content: slots.content,
  title: slots.title,
  description: slots.description,
  closeTrigger: slots.closeTrigger
} satisfies Record<Slots, string | string[]>;

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
export const popoverStyles = styledSlots;
