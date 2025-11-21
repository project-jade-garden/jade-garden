// * https://ark-ui.com/docs/components/avatar#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { avatarStyles } from ".";

export type ImageTraits = Traits<{
  data: {
    scope: "avatar";
    part: "image";
    state: "visible" | "hidden";
  };
}>;

export type FallbackTraits = Traits<{
  data: {
    scope: "avatar";
    part: "fallback";
    state: "hidden" | "visible";
  };
}>;

export type Variants = VariantProps<typeof avatarStyles>;
