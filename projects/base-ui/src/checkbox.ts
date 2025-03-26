// * https://github.com/mui/base-ui/blob/master/packages/react/src/checkbox/index.parts.ts

/**
 * **Checkbox**
 * @description An easily stylable checkbox component.
 * @see [source](https://base-ui.com/react/components/checkbox#api-reference)
 */
export const slots = ["indicator", "root"] as const;

/**
 * **Checkbox**
 * @description An easily stylable checkbox component.
 * @see [source](https://base-ui.com/react/components/checkbox#api-reference)
 */
export type Slots = (typeof slots)[number];
