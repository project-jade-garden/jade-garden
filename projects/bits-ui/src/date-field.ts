// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/date-field/exports.ts

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://www.bits-ui.com/docs/components/date-field#api-reference)
 */
export const slots = ["root", "input", "label", "segment"] as const;

/**
 * **Date Field**
 * @description Enables users to input specific dates within a designated field.
 * @see [source](https://www.bits-ui.com/docs/components/date-field#api-reference)
 */
export type Slots = (typeof slots)[number];
