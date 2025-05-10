// * https://github.com/mui/base-ui/blob/master/packages/react/src/field/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Field**
 * @description A component that provides labelling and validation for form controls.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export const slots = ["control", "description", "error", "label", "root", "validity"] as const;

/**
 * **Field**
 * @description A component that provides labelling and validation for form controls.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Field**
 * @description A component that provides labelling and validation for form controls.
 * @see [source](https://base-ui.com/react/components/field#api-reference)
 */
export type Traits = SVATraits<Slots, { control: {}; description: {}; error: {}; label: {}; root: {}; validity: {} }>;
