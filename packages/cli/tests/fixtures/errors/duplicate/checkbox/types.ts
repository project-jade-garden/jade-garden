// * https://ark-ui.com/docs/components/checkbox#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { checkboxStyles } from ".";

export type RootTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "indeterminate" | "checked" | "unchecked";
    invalid: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "indeterminate" | "checked" | "unchecked";
    invalid: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "indeterminate" | "checked" | "unchecked";
    invalid: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "indeterminate" | "checked" | "unchecked";
    invalid: string;
  };
}>;

export type Variants = VariantProps<typeof checkboxStyles>;
