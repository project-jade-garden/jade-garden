// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tour/tour.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/docs/components/tour#anatomy)
 */
export const slots = [
  "content",
  "actionTrigger",
  "closeTrigger",
  "progressText",
  "title",
  "description",
  "positioner",
  "arrow",
  "arrowTip",
  "backdrop",
  "spotlight",
  "control"
] as const;

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/docs/components/tour#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tour**
 * @description A guided tour that helps users understand the interface.
 * @see [source](https://ark-ui.com/docs/components/tour#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    content: {
      scope: "tour";
      part: "content";
      state: "open" | "closed";
      type: "dialog" | "floating" | "tooltip" | "wait";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
      step: "";
    };
    actionTrigger: {
      scope: "tour";
      part: "action-trigger";
      type: "dialog" | "floating" | "tooltip" | "wait";
      disabled: "";
    };
    closeTrigger: {
      scope: "tour";
      part: "close-trigger";
      type: "dialog" | "floating" | "tooltip" | "wait";
    };
    title: {
      scope: "tour";
      part: "title";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
    description: {
      scope: "tour";
      part: "description";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
    positioner: {
      scope: "tour";
      part: "positioner";
      type: "dialog" | "floating" | "tooltip" | "wait";
      placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    };
    backdrop: {
      scope: "tour";
      part: "backdrop";
      state: "open" | "closed";
      type: "dialog" | "floating" | "tooltip" | "wait";
    };
  }
>;
