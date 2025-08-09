// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tags-input/tags-input.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/docs/components/tags-input#anatomy)
 */
export const slots = [
  "root",
  "label",
  "control",
  "input",
  "clearTrigger",
  "item",
  "itemPreview",
  "itemInput",
  "itemText",
  "itemDeleteTrigger"
] as const;

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/docs/components/tags-input#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tags Input**
 * @description A component that allows users to add tags to an input field.
 * @see [source](https://ark-ui.com/docs/components/tags-input#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "tags-input";
      part: "root";
      invalid: "";
      readonly: "";
      disabled: "";
      focus: "";
      empty: "";
    };
    label: {
      scope: "tags-input";
      part: "label";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    control: {
      scope: "tags-input";
      part: "control";
      disabled: "";
      readonly: "";
      invalid: "";
      focus: "";
    };
    input: {
      scope: "tags-input";
      part: "input";
      invalid: "";
    };
    clearTrigger: {
      scope: "tags-input";
      part: "clear-trigger";
      readonly: "";
    };
    item: {
      scope: "tags-input";
      part: "item";
      value: "";
      disabled: "";
    };
    itemPreview: {
      scope: "tags-input";
      part: "item-preview";
      value: "";
      disabled: "";
      highlighted: "";
    };
    itemText: {
      scope: "tags-input";
      part: "item-text";
      disabled: "";
      highlighted: "";
    };
  }
>;
