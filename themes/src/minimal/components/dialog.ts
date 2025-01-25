import { type Slots, createSlots } from "@spark-css/core/dialog";

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 *
 * @returns
 * ```js
 * {
 *   base: "dialog",
 *   trigger: "dialog__trigger",
 *   backdrop: "dialog__backdrop",
 *   positioner: "dialog__positioner",
 *   content: "dialog__content",
 *   title: "dialog__title",
 *   description: "dialog__description",
 *   closeTrigger: "dialog__close-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export const dialogSlots = createSlots({});

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 *
 * @example
 * ```css
 * .dialog { }
 *
 * .dialog__trigger { }
 *
 * .dialog__backdrop { }
 *
 * .dialog__positioner { }
 *
 * .dialog__content { }
 *
 * .dialog__title { }
 *
 * .dialog__description { }
 *
 * .dialog__close-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export const dialogStyledSlots = {
  base: "dialog",
  trigger: "dialog__trigger",
  backdrop: "dialog__backdrop",
  positioner: "dialog__positioner",
  content: "dialog__content",
  title: "dialog__title",
  description: "dialog__description",
  closeTrigger: "dialog__close-trigger"
} as const satisfies Record<Slots, string | string[]>;
