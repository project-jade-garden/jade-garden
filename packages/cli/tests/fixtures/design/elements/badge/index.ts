import { cva } from "jade-garden/cva";

export const badgeStyles = cva(
  {
    name: "badge",
    base: [
      // Interactivity
      "select-none",

      // Layout
      "inline-flex",

      // Flexbox & Grid
      "items-center",
      "flex-nowrap",

      // Typography
      "font-medium"
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
      pill: {
        true: "rounded-full"
      },
      size: {
        xs: [
          // Spacing
          "px-1",
          "py-0.5",

          // Sizing
          "icon:size-2",

          // Flexbox & Grid
          "gap-1",

          // Typography
          "text-xs"
        ],
        sm: [
          // Spacing
          "px-1.5",
          "py-1",

          // Sizing
          "icon:size-3",

          // Flexbox & Grid
          "gap-1",

          // Typography
          "text-xs"
        ],
        md: [
          // Spacing
          "px-2",
          "py-1",

          // Sizing
          "icon:size-3",

          // Flexbox & Grid
          "gap-1",

          // Typography
          "text-sm"
        ],
        lg: [
          // Spacing
          "px-2",
          "py-1",

          // Sizing
          "icon:size-4",

          // Flexbox & Grid
          "gap-1.5",

          // Typography
          "text-sm"
        ],
        xl: [
          // Spacing
          "px-2.5",
          "py-1",

          // Sizing
          "icon:size-4",

          // Flexbox & Grid
          "gap-1.5",

          // Typography
          "text-base"
        ]
      },
      variant: {
        solid: "",
        outline: "ring ring-inset",
        soft: "",
        subtle: "ring ring-inset"
      }
    },
    compoundVariants: [
      {
        pill: false,
        size: ["xs", "sm"],
        class: "rounded-sm"
      },
      {
        pill: false,
        size: ["md", "lg", "xl"],
        class: "rounded-md"
      },
      {
        color: "primary",
        variant: "solid",
        class: "bg-primary text-inverted"
      },
      {
        color: "secondary",
        variant: "solid",
        class: "bg-secondary text-inverted"
      },
      {
        color: "tertiary",
        variant: "solid",
        class: "bg-tertiary text-inverted"
      },
      {
        color: "success",
        variant: "solid",
        class: "bg-success text-inverted"
      },
      {
        color: "info",
        variant: "solid",
        class: "bg-info text-inverted"
      },
      {
        color: "warning",
        variant: "solid",
        class: "bg-warning text-inverted"
      },
      {
        color: "error",
        variant: "solid",
        class: "bg-error text-inverted"
      },
      {
        color: "surface",
        variant: "solid",
        class: "bg-surface text-inverted"
      },
      {
        color: "primary",
        variant: "outline",
        class: "text-primary ring-primary/50"
      },
      {
        color: "secondary",
        variant: "outline",
        class: "text-secondary ring-secondary/50"
      },
      {
        color: "tertiary",
        variant: "outline",
        class: "text-tertiary ring-tertiary/50"
      },
      {
        color: "success",
        variant: "outline",
        class: "text-success ring-success/50"
      },
      {
        color: "info",
        variant: "outline",
        class: "text-info ring-info/50"
      },
      {
        color: "warning",
        variant: "outline",
        class: "text-warning ring-warning/50"
      },
      {
        color: "error",
        variant: "outline",
        class: "text-error ring-error/50"
      },
      {
        color: "surface",
        variant: "outline",
        class: "text-surface ring-surface/50"
      },
      {
        color: "primary",
        variant: "soft",
        class: "bg-primary/10 text-primary"
      },
      {
        color: "secondary",
        variant: "soft",
        class: "bg-secondary/10 text-secondary"
      },
      {
        color: "tertiary",
        variant: "soft",
        class: "bg-tertiary/10 text-tertiary"
      },
      {
        color: "success",
        variant: "soft",
        class: "bg-success/10 text-success"
      },
      {
        color: "info",
        variant: "soft",
        class: "bg-info/10 text-info"
      },
      {
        color: "warning",
        variant: "soft",
        class: "bg-warning/10 text-warning"
      },
      {
        color: "error",
        variant: "soft",
        class: "bg-error/10 text-error"
      },
      {
        color: "surface",
        variant: "soft",
        class: "bg-surface/10 text-surface"
      },
      {
        color: "primary",
        variant: "subtle",
        class: "bg-primary/10 text-primary ring-primary/25"
      },
      {
        color: "secondary",
        variant: "subtle",
        class: "bg-secondary/10 text-secondary ring-secondary/25"
      },
      {
        color: "tertiary",
        variant: "subtle",
        class: "bg-tertiary/10 text-tertiary ring-tertiary/25"
      },
      {
        color: "success",
        variant: "subtle",
        class: "bg-success/10 text-success ring-success/25"
      },
      {
        color: "info",
        variant: "subtle",
        class: "bg-info/10 text-info ring-info/25"
      },
      {
        color: "warning",
        variant: "subtle",
        class: "bg-warning/10 text-warning ring-warning/25"
      },
      {
        color: "error",
        variant: "subtle",
        class: "bg-error/10 text-error ring-error/25"
      },
      {
        color: "surface",
        variant: "subtle",
        class: "bg-surface/10 text-surface ring-surface/25"
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
      color: "primary",
      pill: false,
      size: "md",
      variant: "solid"
    }
  },
  {
    description: "Used to highlight and label a status.",
    name: "Badge",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/badge"
  }
);

export type * as BadgeStyles from "./types";
