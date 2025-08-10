// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/link-preview/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Link Preview**
 * @description Displays a summarized preview of a linked content's details or information.
 * @see [source](https://www.bits-ui.com/docs/components/link-preview#api-reference)
 */
export const slots = ["arrow", "root", "content", "trigger", "contentStatic"] as const;

/**
 * **Link Preview**
 * @description Displays a summarized preview of a linked content's details or information.
 * @see [source](https://www.bits-ui.com/docs/components/link-preview#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Link Preview**
 * @description Displays a summarized preview of a linked content's details or information.
 * @see [source](https://www.bits-ui.com/docs/components/link-preview#api-reference)
 */
export type Traits = SVATraits<Slots, { arrow: {}; root: {}; content: {}; trigger: {}; contentStatic: {} }>;
