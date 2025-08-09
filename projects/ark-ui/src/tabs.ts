// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tabs/tabs.anatomy.ts
import type { SVATraits } from "jade-garden/types";

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/docs/components/tabs#anatomy)
 */
export const slots = ["root", "list", "trigger", "content", "indicator"] as const;

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/docs/components/tabs#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "tabs";
      part: "root";
      orientation: "horizontal" | "vertical";
    };
  }
>;
