// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/editable.ts
import { type Slots, createSlots } from "@spark-css/core/editable";

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 *
 * @returns
 * ```js
 * {
 *   base: "parkEditable",
 *   root: "parkEditable__root",
 *   area: "parkEditable__area",
 *   label: "parkEditable__label",
 *   preview: "parkEditable__preview",
 *   input: "parkEditable__input",
 *   editTrigger: "parkEditable__editTrigger",
 *   submitTrigger: "parkEditable__submitTrigger",
 *   cancelTrigger: "parkEditable__cancelTrigger",
 *   control: "parkEditable__control"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 *
 * @example
 * ```css
 * .parkEditable { }
 *
 * .parkEditable__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkEditable__area { }
 *
 * .parkEditable__label { }
 *
 * .parkEditable__preview { }
 *
 * .parkEditable__input { }
 *
 * .parkEditable__editTrigger { }
 *
 * .parkEditable__submitTrigger { }
 *
 * .parkEditable__cancelTrigger { }
 *
 * .parkEditable__control {
 *   (@)apply flex gap-2;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
const styledSlots = {
  base: "parkEditable",
  root: [
    "parkEditable__root",

    // Sizing
    "w-full",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-1.5",
    "flex-col"
  ],
  area: "parkEditable__area",
  label: "parkEditable__label",
  preview: "parkEditable__preview",
  input: "parkEditable__input",
  editTrigger: "parkEditable__editTrigger",
  submitTrigger: "parkEditable__submitTrigger",
  cancelTrigger: "parkEditable__cancelTrigger",
  control: [
    "parkEditable__control",

    // Layout
    "flex",

    // Flexbox & Grid
    "gap-2"
  ]
} satisfies Record<Slots, string | string[]>;

/**
 * **Editable**
 * @description A component that allows users to edit text in place.
 *
 * @example
 * ```css
 * .parkEditable { }
 *
 * .parkEditable__root {
 *   (@)apply w-full flex gap-1.5 flex-col;
 * }
 *
 * .parkEditable__area { }
 *
 * .parkEditable__label { }
 *
 * .parkEditable__preview { }
 *
 * .parkEditable__input { }
 *
 * .parkEditable__editTrigger { }
 *
 * .parkEditable__submitTrigger { }
 *
 * .parkEditable__cancelTrigger { }
 *
 * .parkEditable__control {
 *   (@)apply flex gap-2;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/editable#anatomy)
 */
export const editable = styledSlots;
