// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/floating-panel/floating-panel.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Floating Panel**
 * @description Used to display content in a non-modal floating window.
 * @see [source](https://ark-ui.com/docs/components/floating-panel#anatomy)
 */
export const slots = [
  "trigger",
  "positioner",
  "content",
  "header",
  "body",
  "title",
  "resizeTrigger",
  "dragTrigger",
  "stageTrigger",
  "closeTrigger",
  "control"
] as const;

/**
 * **Floating Panel**
 * @description Used to display content in a non-modal floating window.
 * @see [source](https://ark-ui.com/docs/components/floating-panel#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Floating Panel**
 * @description Used to display content in a non-modal floating window.
 * @see [source](https://ark-ui.com/docs/components/floating-panel#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {};
    positioner: {};
    content: {};
    header: {};
    body: {};
    title: {};
    resizeTrigger: {};
    dragTrigger: {};
    stageTrigger: {};
    closeTrigger: {};
    control: {};
  }
>;
