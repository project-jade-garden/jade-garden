// * https://ark-ui.com/docs/components/carousel#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { carouselStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "carousel";
    part: "root";
    orientation: "horizontal" | "vertical";
  };
}>;

export type ItemGroupTraits = Traits<{
  data: {
    scope: "carousel";
    part: "item-group";
    orientation: "horizontal" | "vertical";
    dragging: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "carousel";
    part: "item";
    index: number;
    inview: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "carousel";
    part: "control";
    orientation: "horizontal" | "vertical";
  };
}>;

export type NextTriggerTraits = Traits<{
  data: {
    scope: "carousel";
    part: "next-trigger";
    orientation: "horizontal" | "vertical";
  };
}>;

export type PrevTriggerTraits = Traits<{
  data: {
    scope: "carousel";
    part: "prev-trigger";
    orientation: "horizontal" | "vertical";
  };
}>;

export type IndicatorGroupTraits = Traits<{
  data: {
    scope: "carousel";
    part: "indicator-group";
    orientation: "horizontal" | "vertical";
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "carousel";
    part: "indicator";
    orientation: "horizontal" | "vertical";
    index: number;
    readonly: string;
    current: string;
  };
}>;

export type AutoplayTriggerTraits = Traits<{
  data: {
    scope: "carousel";
    part: "autoplay-trigger";
    orientation: "horizontal" | "vertical";
    pressed: string;
  };
}>;

export type Variants = VariantProps<typeof carouselStyles>;
