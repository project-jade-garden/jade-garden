// * https://github.com/mui/base-ui/blob/master/packages/react/src/slider/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Slider**
 * @description An easily stylable range input.
 * @see [source](https://base-ui.com/react/components/slider#api-reference)
 */
export const slots = ["control", "indicator", "root", "thumb", "track", "value"] as const;

/**
 * **Slider**
 * @description An easily stylable range input.
 * @see [source](https://base-ui.com/react/components/slider#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Slider**
 * @description An easily stylable range input.
 * @see [source](https://base-ui.com/react/components/slider#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    control: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
    };
    indicator: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
    };
    root: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
    };
    thumb: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
      index: "number";
    };
    track: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
    };
    value: {
      dragging: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      readonly: "";
      required: "";
      valid: "";
      invalid: "";
      dirty: "";
      touched: "";
      focused: "";
    };
  }
>;
