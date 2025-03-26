// * https://github.com/mui/base-ui/blob/master/packages/react/src/slider/index.parts.ts

/**
 * **Slider**
 * @description An easily stylable range input.
 * @see [source](https://base-ui.com/react/components/slider#api-reference)
 */
export const slots = ["control", "indicator", "root", "thumb", "track", "value"] as const;

/**
 * **Slider**
 * @description An easily stylable range input.
 * @see [source](https://base-ui.com/react/components/slider#api-reference)
 */
export type Slots = (typeof slots)[number];
