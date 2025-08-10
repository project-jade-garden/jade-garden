// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/avatar/avatar.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/docs/components/avatar#anatomy)
 */
export const slots = ["root", "image", "fallback"] as const;

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/docs/components/avatar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Avatar**
 * @description A graphical representation of the user, often used in profile sections.
 * @see [source](https://ark-ui.com/docs/components/avatar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    image: {
      scope: "avatar";
      part: "image";
      state: "visible" | "hidden";
    };
    fallback: {
      scope: "avatar";
      part: "fallback";
      state: "hidden" | "visible";
    };
  }
>;
