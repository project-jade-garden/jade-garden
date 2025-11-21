// * https://ark-ui.com/docs/components/accordion#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "accordion";
    part: "root";
    orientation: "horizontal" | "vertical";
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "accordion";
    part: "item";
    state: "open" | "closed";
    focus: string;
    disabled: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type ItemTriggerTraits = Traits<{
  data: {
    scope: "accordion";
    part: "item-trigger";
    orientation: "horizontal" | "vertical";
    state: "open" | "closed";
  };
}>;

export type ItemContentTraits = Traits<{
  data: {
    scope: "accordion";
    part: "item-content";
    state: "open" | "closed";
    disabled: string;
    focus: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "accordion";
    part: "item-indicator";
    state: "open" | "closed";
    disabled: string;
    focus: string;
    orientation: "horizontal" | "vertical";
  };
}>;
