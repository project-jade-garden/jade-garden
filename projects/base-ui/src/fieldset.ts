// * https://github.com/mui/base-ui/blob/master/packages/react/src/fieldset/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Fieldset**
 * @description A native fieldset element with an easily stylable legend.
 * @see [source](https://base-ui.com/react/components/fieldset#api-reference)
 */
export const slots = ["legend", "root"] as const;

/**
 * **Fieldset**
 * @description A native fieldset element with an easily stylable legend.
 * @see [source](https://base-ui.com/react/components/fieldset#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Fieldset**
 * @description A native fieldset element with an easily stylable legend.
 * @see [source](https://base-ui.com/react/components/fieldset#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
