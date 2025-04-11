// * https://github.com/mui/base-ui/blob/master/packages/react/src/checkbox-group/index.parts.ts

/**
 * **Checkbox Group**
 * @description Provides shared state to a series of checkboxes.
 * @see [source](https://base-ui.com/react/components/checkbox-group#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Checkbox Group**
 * @description An easily stylable checkbox component.
 * @see [source](https://base-ui.com/react/components/checkbox#api-reference)
 */
export type Slots = (typeof slots)[number];
