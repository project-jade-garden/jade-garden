// * https://github.com/mui/base-ui/blob/master/packages/react/src/toggle/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Toggle Group**
 * @description Provides a shared state to a series of toggle buttons.
 * @see [source](https://base-ui.com/react/components/toggle-group#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Toggle Group**
 * @description Provides a shared state to a series of toggle buttons.
 * @see [source](https://base-ui.com/react/components/toggle-group#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Toggle Group**
 * @description Provides a shared state to a series of toggle buttons.
 * @see [source](https://base-ui.com/react/components/toggle-group#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
