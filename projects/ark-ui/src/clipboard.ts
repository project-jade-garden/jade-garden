// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/clipboard/clipboard.anatomy.ts

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export const slots = ["root", "control", "trigger", "indicator", "input", "label"] as const;

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export type Slots = (typeof slots)[number];
