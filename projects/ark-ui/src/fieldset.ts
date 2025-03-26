// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/fieldset/fieldset.anatomy.ts

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export const slots = ["root", "errorText", "helperText", "legend"] as const;

/**
 * **Fieldset**
 * @description A set of form controls optionally grouped under a common name.
 * @see [source](https://ark-ui.com/vue/docs/components/fieldset#anatomy)
 */
export type Slots = (typeof slots)[number];
