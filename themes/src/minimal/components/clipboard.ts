import { type Slots, createSlots } from "@spark-css/core/clipboard";

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 *
 * @returns
 * ```js
 * {
 *   base: "clipboard",
 *   root: "clipboard__root",
 *   control: "clipboard__control",
 *   trigger: "clipboard__trigger",
 *   indicator: "clipboard__indicator",
 *   input: "clipboard__input",
 *   label: "clipboard__label"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "clipboard",
  root: "clipboard__root",
  control: "clipboard__control",
  trigger: "clipboard__trigger",
  indicator: "clipboard__indicator",
  input: "clipboard__input",
  label: "clipboard__label"
} satisfies Record<Slots, string | string[]>;

/**
 * **Clipboard**
 * @description A component to copy text to the clipboard.
 *
 * @example
 * ```css
 * .clipboard { }
 *
 * .clipboard__root { }
 *
 * .clipboard__control { }
 *
 * .clipboard__trigger { }
 *
 * .clipboard__indicator { }
 *
 * .clipboard__input { }
 *
 * .clipboard__label { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/clipboard#anatomy)
 */
export const clipboard = styledSlots;
