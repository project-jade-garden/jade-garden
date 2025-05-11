// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Editable/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Editable**
 * @description Displays an input field used for editing a single line of text, rendering as static text on load. It transforms into a text input field when the edit interaction is triggered.
 * @see [source](https://reka-ui.com/docs/components/editable#anatomy)
 */
export const slots = ["root", "area", "input", "preview", "submitTrigger", "cancelTrigger", "editTrigger"] as const;

/**
 * **Editable**
 * @description Displays an input field used for editing a single line of text, rendering as static text on load. It transforms into a text input field when the edit interaction is triggered.
 * @see [source](https://reka-ui.com/docs/components/editable#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Editable**
 * @description Displays an input field used for editing a single line of text, rendering as static text on load. It transforms into a text input field when the edit interaction is triggered.
 * @see [source](https://reka-ui.com/docs/components/editable#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    area: {
      readonly: "";
      disabled: "";
      "placeholder-shown": "";
      empty: "";
      focus: "";
      focused: "";
    };
    input: {
      readonly: "";
      disabled: "";
    };
  }
>;
