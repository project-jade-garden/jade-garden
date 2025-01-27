import { createSlots } from "@spark-css/core/editable";
/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 *
 * @returns
 * ```js
 * {
 *   base: "editable",
 *   root: "editable__root",
 *   area: "editable__area",
 *   label: "editable__label",
 *   preview: "editable__preview",
 *   input: "editable__input",
 *   editTrigger: "editable__edit-trigger",
 *   submitTrigger: "editable__submit-trigger",
 *   cancelTrigger: "editable__cancel-trigger",
 *   control: "editable__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/editable").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  area: slots.area,
  label: slots.label,
  preview: slots.preview,
  input: slots.input,
  editTrigger: slots.editTrigger,
  submitTrigger: slots.submitTrigger,
  cancelTrigger: slots.cancelTrigger,
  control: slots.control
};
/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 *
 * @example
 * ```css
 * .editable { }
 *
 * .editable__root { }
 *
 * .editable__area { }
 *
 * .editable__label { }
 *
 * .editable__preview { }
 *
 * .editable__input { }
 *
 * .editable__edit-trigger { }
 *
 * .editable__submit-trigger { }
 *
 * .editable__cancel-trigger { }
 *
 * .editable__control { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export const editableStyles = styledSlots;
