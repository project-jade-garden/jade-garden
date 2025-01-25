import { createSlots } from "@spark-css/core/tags-input";
/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 *
 * @returns
 * ```js
 * {
 *   base: "tags-input",
 *   root: "tags-input__root",
 *   label: "tags-input__label",
 *   control: "tags-input__control",
 *   input: "tags-input__input",
 *   clearTrigger: "tags-input__clear-trigger",
 *   item: "tags-input__item",
 *   itemPreview: "tags-input__item-preview",
 *   itemInput: "tags-input__item-input",
 *   itemText: "tags-input__item-text",
 *   itemDeleteTrigger: "tags-input__item-delete-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef {import("@spark-css/core/tags-input").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
    base: slots.base,
    root: slots.root,
    label: slots.label,
    control: slots.control,
    input: slots.input,
    clearTrigger: slots.clearTrigger,
    item: slots.item,
    itemPreview: slots.itemPreview,
    itemInput: slots.itemInput,
    itemText: slots.itemText,
    itemDeleteTrigger: slots.itemDeleteTrigger
};
/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 *
 * @example
 * ```css
 * .tags-input { }
 *
 * .tags-input__root { }
 *
 * .tags-input__label { }
 *
 * .tags-input__control { }
 *
 * .tags-input__input { }
 *
 * .tags-input__clear-trigger { }
 *
 * .tags-input__item { }
 *
 * .tags-input__item-preview { }
 *
 * .tags-input__item-input { }
 *
 * .tags-input__item-text { }
 *
 * .tags-input__item-delete-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tags-input#anatomy)
 */
export const tagsInput = styledSlots;
