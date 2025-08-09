// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/fieldset/fieldset.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/docs/components/fieldset#anatomy)
 */
export const slots = ["root", "errorText", "helperText", "legend"] as const;

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/docs/components/fieldset#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/docs/components/fieldset#api-reference)
 */
export type Traits = SVATraits<Slots, {}>;
