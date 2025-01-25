import { createSlots } from "@spark-css/core/dialog";
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
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/dialog").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: slots.base,
  trigger: slots.trigger,
  backdrop: slots.backdrop,
  positioner: slots.positioner,
  content: slots.content,
  title: slots.title,
  description: slots.description,
  closeTrigger: slots.closeTrigger
};
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
export const dialog = styledSlots;
