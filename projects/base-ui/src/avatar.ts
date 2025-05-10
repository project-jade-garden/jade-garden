// * https://github.com/mui/base-ui/blob/master/packages/react/src/avatar/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Avatar**
 * @description An easily stylable avatar component.
 * @see [source](https://base-ui.com/react/components/avatar#api-reference)
 */
export const slots = ["fallback", "image", "root"] as const;

/**
 * **Avatar**
 * @description An easily stylable avatar component.
 * @see [source](https://base-ui.com/react/components/avatar#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Avatar**
 * @description An easily stylable avatar component.
 * @see [source](https://base-ui.com/react/components/avatar#api-reference)
 */
export type Traits = SVATraits<Slots, { fallback: {}; image: {}; root: {} }>;
