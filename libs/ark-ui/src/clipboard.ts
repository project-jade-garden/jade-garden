// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/clipboard/clipboard.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export const slots = ["trigger", "control", "root", "input", "label", "indicator"] as const;

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
