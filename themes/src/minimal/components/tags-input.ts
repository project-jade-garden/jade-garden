import {
  type TagsInputSlots,
  // createTagsInputDocs,
  createTagsInputSlots
} from "@spark-css/core/tags-input";

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
export const tagsInputSlots = createTagsInputSlots({});

// * Uncomment before styling slots
// createTagsInputDocs("anatomy", tagsInputSlots);

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
export const tagsInputStyledSlots = {
  base: "tags-input",
  root: "tags-input__root",
  label: "tags-input__label",
  control: "tags-input__control",
  input: "tags-input__input",
  clearTrigger: "tags-input__clear-trigger",
  item: "tags-input__item",
  itemPreview: "tags-input__item-preview",
  itemInput: "tags-input__item-input",
  itemText: "tags-input__item-text",
  itemDeleteTrigger: "tags-input__item-delete-trigger"
} as const satisfies Record<TagsInputSlots, string | string[]>;

// * Uncomment after styling slots
// createTagsInputDocs("styled", tagsInputStyledSlots);
