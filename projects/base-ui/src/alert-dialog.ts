// * https://github.com/mui/base-ui/blob/master/packages/react/src/alert-dialog/index.parts.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Alert Dialog**
 * @description A dialog that requires user response to proceed.
 * @see [source](https://base-ui.com/react/components/alert-dialog#api-reference)
 */
export const slots = ["backdrop", "close", "description", "popup", "root", "title", "trigger"] as const;

/**
 * **Alert Dialog**
 * @description A dialog that requires user response to proceed.
 * @see [source](https://base-ui.com/react/components/alert-dialog#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Alert Dialog**
 * @description A dialog that requires user response to proceed.
 * @see [source](https://base-ui.com/react/components/alert-dialog#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    backdrop: {
      open: "";
      closed: "";
      "starting-style": "";
      "ending-style": "";
    };
    close: {
      disabled: "";
    };
    popup: {
      open: "";
      closed: "";
      nested: "";
      "nested-dialog-open": "";
      "starting-style": "";
      "ending-style": "";
    };
    trigger: {
      "popup-open": "";
      disabled: "";
    };
  }
>;
