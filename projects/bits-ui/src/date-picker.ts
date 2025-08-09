// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/date-picker/exports.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://www.bits-ui.com/docs/components/date-picker#api-reference)
 */
export const slots = ["root", "input", "label", "segment"] as const;

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://www.bits-ui.com/docs/components/date-picker#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Date Picker**
 * @description Facilitates the selection of dates through an input and calendar-based interface.
 * @see [source](https://www.bits-ui.com/docs/components/date-picker#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; input: {}; label: {}; segment: {} }>;
