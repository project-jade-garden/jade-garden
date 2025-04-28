// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/floating-panel/floating-panel.anatomy.ts

/**
 * **Floating Panel**
 * @description Used to display content in a non-modal floating window.
 * @see [source](https://ark-ui.com/docs/components/floating-panel#anatomy)
 */
export const slots = [
  "control",
  "trigger",
  "content",
  "positioner",
  "title",
  "closeTrigger",
  "header",
  "body",
  "resizeTrigger",
  "dragTrigger",
  "stageTrigger"
] as const;

/**
 * **Floating Panel**
 * @description Used to display content in a non-modal floating window.
 * @see [source](https://ark-ui.com/docs/components/floating-panel#anatomy)
 */
export type Slots = (typeof slots)[number];
