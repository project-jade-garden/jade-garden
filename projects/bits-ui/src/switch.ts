// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/switch/exports.ts

/**
 * **Switch**
 * @description A toggle control enabling users to switch between "on" and "off" states.
 * @see [source](https://www.bits-ui.com/docs/components/switch#api-reference)
 */
export const slots = ["root", "thumb"] as const;

/**
 * **Switch**
 * @description A toggle control enabling users to switch between "on" and "off" states.
 * @see [source](https://www.bits-ui.com/docs/components/switch#api-reference)
 */
export type Slots = (typeof slots)[number];
