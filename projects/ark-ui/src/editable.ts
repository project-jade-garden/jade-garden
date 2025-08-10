// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/editable/editable.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/docs/components/editable#anatomy)
 */
export const slots = [
  "root",
  "area",
  "label",
  "preview",
  "input",
  "editTrigger",
  "submitTrigger",
  "cancelTrigger",
  "control"
] as const;

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/docs/components/editable#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 * @see [source](https://ark-ui.com/docs/components/editable#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    area: {
      scope: "editable";
      part: "area";
      focus: "";
      disabled: "";
      placeholder: "";
    };
    label: {
      scope: "editable";
      part: "label";
      focus: "";
    };
    preview: {
      scope: "editable";
      part: "preview";
      placeholder: "";
      readonly: "";
      disabled: "";
      invalid: "";
      autoresize: "";
    };
    input: {
      scope: "editable";
      part: "input";
      disabled: "";
      readonly: "";
      invalid: "";
      autoresize: "";
    };
  }
>;
