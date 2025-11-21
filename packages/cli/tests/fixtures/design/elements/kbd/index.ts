import { cva } from "jade-garden/cva";

export const kbdStyles = cva(
  {
    name: "kbd",
    base: [
      // Spacing
      "px-1",

      // Borders
      "rounded-sm",

      // Layout
      "inline-flex",

      // Flexbox & Grid
      "center",

      // Typography
      "font-medium",
      "font-sans",
      "uppercase"
    ],
    variants: {
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        success: "",
        info: "",
        warning: "",
        error: "",
        surface: ""
      },
      variant: {
        solid: "",
        outline: "ring ring-inset",
        soft: "",
        subtle: "ring ring-inset"
      },
      size: {
        sm: [
          // Spacing
          "px-0.5",

          // Sizing
          "min-h-5",

          // Typography
          "text-xs"
        ],
        md: [
          // Spacing
          "px-1",
          "py-px",

          // Sizing
          "min-h-6",

          // Typography
          "text-sm"
        ],
        lg: [
          // Spacing
          "px-1.5",
          "py-px",

          // Sizing
          "min-h-7",

          // Typography
          "text-md"
        ]
      }
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "solid",
        class: "text-inverted bg-primary"
      },
      {
        color: "secondary",
        variant: "solid",
        class: "text-inverted bg-secondary"
      },
      {
        color: "tertiary",
        variant: "solid",
        class: "text-inverted bg-tertiary"
      },
      {
        color: "success",
        variant: "solid",
        class: "text-inverted bg-success"
      },
      {
        color: "info",
        variant: "solid",
        class: "text-inverted bg-info"
      },
      {
        color: "warning",
        variant: "solid",
        class: "text-inverted bg-warning"
      },
      {
        color: "error",
        variant: "solid",
        class: "text-inverted bg-error"
      },
      {
        color: "primary",
        variant: "outline",
        class: "ring-primary/50 text-primary"
      },
      {
        color: "secondary",
        variant: "outline",
        class: "ring-secondary/50 text-secondary"
      },
      {
        color: "tertiary",
        variant: "outline",
        class: "ring-tertiary/50 text-tertiary"
      },
      {
        color: "success",
        variant: "outline",
        class: "ring-success/50 text-success"
      },
      {
        color: "info",
        variant: "outline",
        class: "ring-info/50 text-info"
      },
      {
        color: "warning",
        variant: "outline",
        class: "ring-warning/50 text-warning"
      },
      {
        color: "error",
        variant: "outline",
        class: "ring-error/50 text-error"
      },
      {
        color: "primary",
        variant: "soft",
        class: "text-primary bg-primary/10"
      },
      {
        color: "secondary",
        variant: "soft",
        class: "text-secondary bg-secondary/10"
      },
      {
        color: "tertiary",
        variant: "soft",
        class: "text-tertiary bg-tertiary/10"
      },
      {
        color: "success",
        variant: "soft",
        class: "text-success bg-success/10"
      },
      {
        color: "info",
        variant: "soft",
        class: "text-info bg-info/10"
      },
      {
        color: "warning",
        variant: "soft",
        class: "text-warning bg-warning/10"
      },
      {
        color: "error",
        variant: "soft",
        class: "text-error bg-error/10"
      },
      {
        color: "primary",
        variant: "subtle",
        class: "text-primary ring-primary/25 bg-primary/10"
      },
      {
        color: "secondary",
        variant: "subtle",
        class: "text-secondary ring-secondary/25 bg-secondary/10"
      },
      {
        color: "tertiary",
        variant: "subtle",
        class: "text-tertiary ring-tertiary/25 bg-tertiary/10"
      },
      {
        color: "success",
        variant: "subtle",
        class: "text-success ring-success/25 bg-success/10"
      },
      {
        color: "info",
        variant: "subtle",
        class: "text-info ring-info/25 bg-info/10"
      },
      {
        color: "warning",
        variant: "subtle",
        class: "text-warning ring-warning/25 bg-warning/10"
      },
      {
        color: "error",
        variant: "subtle",
        class: "text-error ring-error/25 bg-error/10"
      },
      {
        color: "surface",
        variant: "solid",
        class: "text-inverted bg-inverted"
      },
      {
        color: "surface",
        variant: "outline",
        class: "ring-accented text-default bg-default"
      },
      {
        color: "surface",
        variant: "soft",
        class: "text-default bg-elevated"
      },
      {
        color: "surface",
        variant: "subtle",
        class: "ring-accented text-default bg-elevated"
      }
    ],
    defaultVariants: {
      color: "surface",
      size: "md",
      variant: "outline"
    }
  },

  {
    description: "Represents a keyboard input or hotkey.",
    name: "Kbd",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/kbd"
  }
);

export type * as KbdStyles from "./types";
