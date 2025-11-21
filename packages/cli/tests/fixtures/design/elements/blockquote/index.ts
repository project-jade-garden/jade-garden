import { cva } from "jade-garden/cva";

export const blockquoteStyles = cva(
  {
    name: "blockquote",
    base: "border-s-4 ps-4 italic",
    variants: {
      color: {
        primary: "border-primary",
        secondary: "border-secondary",
        tertiary: "border-tertiary",
        success: "border-success",
        info: "border-info",
        warning: "border-warning",
        error: "border-error",
        surface: "border-accented"
      }
    },
    defaultVariants: {
      color: "surface"
    }
  },
  {
    description: "Used to highlight important information or quotes.",
    name: "Blockquote",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/blockquote"
  }
);

export type * as BlockquoteStyles from "./types";
