// * https://github.com/mui/base-ui/blob/master/packages/react/src/dialog/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Dialog**
 * @description A popup that opens on top of the entire page.
 * @see [source](https://base-ui.com/react/components/dialog#api-reference)
 */
export const slots = ["backdrop", "close", "description", "popup", "root", "title", "trigger"] as const;

/**
 * **Dialog**
 * @description A popup that opens on top of the entire page.
 * @see [source](https://base-ui.com/react/components/dialog#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dialog**
 * @description A popup that opens on top of the entire page.
 * @see [source](https://base-ui.com/react/components/dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { backdrop: {}; close: {}; description: {}; popup: {}; root: {}; title: {}; trigger: {} }
>;
