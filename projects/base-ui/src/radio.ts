// * https://github.com/mui/base-ui/blob/master/packages/react/src/radio/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Radio**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export const slots = ["indicator", "root"] as const;

/**
 * **Radio**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type Traits = SVATraits<Slots, { indicator: {}; root: {} }>;
