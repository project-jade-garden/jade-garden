// * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle**
 * @description A two-state button that can be on or off.
 * @see [source](https://base-ui.com/react/components/toggle#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Toggle**
 * @description A two-state button that can be on or off.
 * @see [source](https://base-ui.com/react/components/toggle#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle**
 * @description A two-state button that can be on or off.
 * @see [source](https://base-ui.com/react/components/toggle#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
