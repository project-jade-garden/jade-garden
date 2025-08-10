// * https://github.com/mui/base-ui/blob/master/packages/react/src/radio-group/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
