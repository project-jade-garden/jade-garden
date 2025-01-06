// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/editable.ts
import { type EditableSlots, createEditableSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

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
export const editableSlots = createEditableSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("editable", editableSlots));

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
export const editableStyledSlots = {
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
} as const satisfies Record<EditableSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("editable", editableStyledSlots));
