// * https://github.com/mui/base-ui/blob/master/packages/react/src/form/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Form**
 * @description A native form element with consolidated error handling.
 * @see [source](https://base-ui.com/react/components/form#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Form**
 * @description A native form element with consolidated error handling.
 * @see [source](https://base-ui.com/react/components/form#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Form**
 * @description A native form element with consolidated error handling.
 * @see [source](https://base-ui.com/react/components/form#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
