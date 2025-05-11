// * https://github.com/mui/base-ui/blob/master/packages/react/src/checkbox-group/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Checkbox Group**
 * @description Provides shared state to a series of checkboxes.
 * @see [source](https://base-ui.com/react/components/checkbox-group#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Checkbox Group**
 * @description Provides shared state to a series of checkboxes.
 * @see [source](https://base-ui.com/react/components/checkbox-group#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Checkbox Group**
 * @description Provides shared state to a series of checkboxes.
 * @see [source](https://base-ui.com/react/components/checkbox-group#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
