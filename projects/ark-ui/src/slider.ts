// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/slider/slider.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/docs/components/slider#anatomy)
 */
export const slots = [
  "root",
  "label",
  "thumb",
  "valueText",
  "track",
  "range",
  "control",
  "markerGroup",
  "marker",
  "draggingIndicator"
] as const;

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/docs/components/slider#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Slider**
 * @description A control element that allows for a range of selections.
 * @see [source](https://ark-ui.com/docs/components/slider#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "slider";
      part: "root";
      disabled: "";
      orientation: "horizontal" | "vertical";
      dragging: "";
      invalid: "";
      focus: "";
    };
    label: {
      scope: "slider";
      part: "label";
      disabled: "";
      orientation: "horizontal" | "vertical";
      invalid: "";
      dragging: "";
      focus: "";
    };
    thumb: {
      scope: "slider";
      part: "thumb";
      index: "number";
      name: "";
      disabled: "";
      orientation: "horizontal" | "vertical";
      focus: "";
      dragging: "";
    };
    valueText: {
      scope: "slider";
      part: "value-text";
      disabled: "";
      orientation: "horizontal" | "vertical";
      invalid: "";
      focus: "";
    };
    track: {
      scope: "slider";
      part: "track";
      disabled: "";
      invalid: "";
      dragging: "";
      orientation: "horizontal" | "vertical";
      focus: "";
    };
    range: {
      scope: "slider";
      part: "range";
      dragging: "";
      focus: "";
      invalid: "";
      disabled: "";
      orientation: "horizontal" | "vertical";
    };
    control: {
      scope: "slider";
      part: "control";
      dragging: "";
      disabled: "";
      orientation: "horizontal" | "vertical";
      invalid: "";
      focus: "";
    };
    markerGroup: {
      scope: "slider";
      part: "marker-group";
      orientation: "horizontal" | "vertical";
    };
    marker: {
      scope: "slider";
      part: "marker";
      orientation: "horizontal" | "vertical";
      value: "";
      disabled: "";
      state: "";
    };
    draggingIndicator: {
      scope: "slider";
      part: "dragging-indicator";
      orientation: "horizontal" | "vertical";
      state: "open" | "closed";
    };
  }
>;
