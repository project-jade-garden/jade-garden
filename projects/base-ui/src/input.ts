// * https://github.com/mui/base-ui/blob/master/packages/react/src/input/index.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Input**
 * @description A native input element that automatically works with Field.
 * @see [source](https://base-ui.com/react/components/input#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Input**
 * @description A native input element that automatically works with Field.
 * @see [source](https://base-ui.com/react/components/input#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Input**
 * @description A native input element that automatically works with Field.
 * @see [source](https://base-ui.com/react/components/input#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
