// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/collapsible/collapsible.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/docs/components/collapsible#anatomy)
 */
export const slots = ["root", "trigger", "content", "indicator"] as const;

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/docs/components/collapsible#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 * @see [source](https://ark-ui.com/docs/components/collapsible#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "collapsible";
      part: "root";
      state: "open" | "closed";
    };
    trigger: {
      scope: "collapsible";
      part: "trigger";
      state: "open" | "closed";
      disabled: "";
    };
    content: {
      scope: "collapsible";
      part: "content";
      collapsible: "";
      state: "open" | "closed";
      disabled: "";
    };
    indicator: {
      scope: "collapsible";
      part: "indicator";
      state: "open" | "closed";
      disabled: "";
    };
  }
>;
