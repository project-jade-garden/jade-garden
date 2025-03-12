// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/pin-input/pin-input.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export const slots = ["root", "control", "input", "label"] as const;

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/vue/docs/components/pin-input#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
