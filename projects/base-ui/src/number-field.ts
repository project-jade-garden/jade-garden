// * https://github.com/mui/base-ui/blob/master/packages/react/src/number-field/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Number Field**
 * @description A numeric input element with increment and decrement buttons, and a scrub area.
 * @see [source](https://base-ui.com/react/components/number-field#api-reference)
 */
export const slots = ["decrement", "group", "increment", "input", "root", "scrubArea", "scrubAreaCursor"] as const;

/**
 * **Number Field**
 * @description A numeric input element with increment and decrement buttons, and a scrub area.
 * @see [source](https://base-ui.com/react/components/number-field#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Number Field**
 * @description A numeric input element with increment and decrement buttons, and a scrub area.
 * @see [source](https://base-ui.com/react/components/number-field#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { decrement: {}; group: {}; increment: {}; input: {}; root: {}; scrubArea: {}; scrubAreaCursor: {} }
>;
