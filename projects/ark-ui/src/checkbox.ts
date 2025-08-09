// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/checkbox/checkbox.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/docs/components/checkbox#anatomy)
 */
export const slots = ["root", "label", "control", "indicator", "group"] as const;

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/docs/components/checkbox#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 * @see [source](https://ark-ui.com/docs/components/checkbox#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      active: "";
      focus: "";
      readonly: "";
      hover: "";
      disabled: "";
      state: "indeterminate" | "checked" | "unchecked";
      invalid: "";
    };
    label: {
      active: "";
      focus: "";
      readonly: "";
      hover: "";
      disabled: "";
      state: "indeterminate" | "checked" | "unchecked";
      invalid: "";
    };
    control: {
      active: "";
      focus: "";
      readonly: "";
      hover: "";
      disabled: "";
      state: "indeterminate" | "checked" | "unchecked";
      invalid: "";
    };
    indicator: {
      active: "";
      focus: "";
      readonly: "";
      hover: "";
      disabled: "";
      state: "indeterminate" | "checked" | "unchecked";
      invalid: "";
    };
  }
>;
