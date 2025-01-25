import { type Slots, createSlots } from "@spark-css/core/editable";

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
export const editableSlots = createSlots({});

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
export const editableStyledSlots = {
  base: "editable",
  root: "editable__root",
  area: "editable__area",
  label: "editable__label",
  preview: "editable__preview",
  input: "editable__input",
  editTrigger: "editable__edit-trigger",
  submitTrigger: "editable__submit-trigger",
  cancelTrigger: "editable__cancel-trigger",
  control: "editable__control"
} as const satisfies Record<Slots, string | string[]>;
