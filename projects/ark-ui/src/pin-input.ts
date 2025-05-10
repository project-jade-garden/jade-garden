// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/pin-input/pin-input.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/docs/components/pin-input#anatomy)
 */
export const slots = ["root", "label", "input", "control"] as const;

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/docs/components/pin-input#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Pin Input**
 * @description For pin or verification codes with auto-focus transfer and masking options.
 * @see [source](https://ark-ui.com/docs/components/pin-input#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; label: {}; input: {}; control: {} }>;
