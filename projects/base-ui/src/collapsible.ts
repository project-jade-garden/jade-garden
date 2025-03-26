// * https://github.com/mui/base-ui/blob/master/packages/react/src/collapsible/index.parts.ts

/**
 * **Collapsible**
 * @description A collapsible panel controlled by a button.
 * @see [source](https://base-ui.com/react/components/collapsible#api-reference)
 */
export const slots = ["panel", "root", "trigger"] as const;

/**
 * **Collapsible**
 * @description A collapsible panel controlled by a button.
 * @see [source](https://base-ui.com/react/components/collapsible#api-reference)
 */
export type Slots = (typeof slots)[number];
