import { cva } from "jade-garden/cva";

export const labelStyles = cva(
  {
    name: "label",
    base: "text-default font-medium",
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "A text component that represents a caption for an item in a user interface.",
    name: "Label",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/label"
  }
);

export type * as LabelStyles from "./types";
