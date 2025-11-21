import { cva } from "jade-garden/cva";

export const inputStyles = cva(
  {
    name: "input",
    base: [
      // Sizing
      "w-full",

      // Borders
      "rounded-md",
      "border-0",

      // Effects
      "disabled:opacity-75",

      // Interactivity
      "appearance-none",
      "disabled:cursor-not-allowed",

      // Layout
      "focus:outline-none",

      // Typography
      "placeholder:text-dimmed",

      // Transitions & Animation
      "transition-[box-shadow,_border-color]",
      "duration-200",
      "ease-in"
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
      highlight: {
        true: ""
      },
      size: {
        xs: [
          // Spacing
          "px-2",
          "py-1",

          // Flexbox & Grid
          "gap-1",

          // Typography
          "text-xs"
        ],
        sm: [
          // Spacing
          "px-2.5",
          "py-1.5",

          // Flexbox & Grid
          "gap-1.5",

          // Typography
          "text-xs"
        ],
        md: [
          // Spacing
          "px-2.5",
          "py-1.5",

          // Flexbox & Grid
          "gap-1.5",

          // Typography
          "text-sm"
        ],
        lg: [
          // Spacing
          "px-3",
          "py-2",

          // Flexbox & Grid
          "gap-2",

          // Typography
          "text-base"
        ]
      },
      variant: {
        outline: [
          // Backgrounds
          "bg-default",

          // Effects
          "ring",
          "ring-inset",
          "ring-accented",

          // Typography
          "text-highlighted"
        ],
        soft: [
          // Backgrounds
          "bg-disabled/50",
          "hover:bg-disabled",
          "focus:bg-disabled",
          "disabled:bg-disabled/50",

          // Effects
          "ring",
          "ring-inset",
          "ring-accented",

          // Typography
          "text-highlighted"
        ],
        subtle: [
          // Backgrounds
          "bg-disabled",

          // Effects
          "ring",
          "ring-inset",
          "ring-accented",

          // Typography
          "text-highlighted"
        ],
        ghost: [
          // Backgrounds
          "bg-transparent",
          "hover:bg-disabled",
          "focus:bg-disabled",
          "disabled:bg-transparent",
          "dark:disabled:bg-transparent",

          // Typography
          "text-highlighted"
        ],
        none: "bg-transparent text-highlighted"
      },
      type: {
        file: "file:me-1.5 file:font-medium file:text-muted file:outline-none"
      }
    },
    compoundVariants: [
      {
        color: "primary",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      },
      {
        color: "secondary",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      },
      {
        color: "tertiary",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tertiary"
      },
      {
        color: "success",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      },
      {
        color: "info",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      },
      {
        color: "warning",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      },
      {
        color: "error",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      },
      {
        color: "surface",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-surface"
      },
      {
        color: "primary",
        highlight: true,
        class: "ring ring-inset ring-primary"
      },
      {
        color: "secondary",
        highlight: true,
        class: "ring ring-inset ring-secondary"
      },
      {
        color: "tertiary",
        highlight: true,
        class: "ring ring-inset ring-tertiary"
      },
      {
        color: "success",
        highlight: true,
        class: "ring ring-inset ring-success"
      },
      {
        color: "info",
        highlight: true,
        class: "ring ring-inset ring-info"
      },
      {
        color: "warning",
        highlight: true,
        class: "ring ring-inset ring-warning"
      },
      {
        color: "error",
        highlight: true,
        class: "ring ring-inset ring-error"
      },
      {
        color: "surface",
        highlight: true,
        class: "ring ring-inset ring-surface"
      },
      {
        color: "surface",
        variant: ["outline", "subtle"],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
      },
      {
        color: "surface",
        highlight: true,
        class: "ring ring-inset ring-inverted"
      }
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
      variant: "outline"
    }
  },
  {
    description: "A field for user input, often used for forms or search functionality.",
    name: "Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/input"
  }
);

export type * as InputStyles from "./types";
