import { cva } from "jade-garden/cva";

export const buttonStyles = cva(
  {
    name: "button",
    base: [
      // Sizing
      "min-w-0",
      "icon:size-[1.1em]",

      // Borders
      "rounded-sm",

      // Effects
      "disabled:opacity-75",

      // Interactivity
      "appearance-none",
      "cursor-pointer",
      "disabled:cursor-not-allowed",
      "select-none",

      // Layout
      "isolate",
      "relative",
      "inline-flex",
      "hidden:hidden",
      "outline-none",

      // Flexbox & Grid
      "center",

      // Typography
      "font-semibold",
      "align-middle",
      "whitespace-nowrap",
      "icon:text-[1.1em]",

      // Transitions & Animation
      "transition-[background,_border-color,_color,_box-shadow]",
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
      variant: {
        solid: "",
        outline: "",
        soft: "",
        subtle: "",
        ghost: "",
        link: ""
      },
      size: {
        xs: [
          // Spacing
          "px-2",

          // Sizing
          "h-8",
          "min-w-8",

          // Flexbox & Grid
          "gap-2",

          // Typography
          "text-xs"
        ],
        sm: [
          // Spacing
          "px-3.5",

          // Sizing
          "h-9",
          "min-w-9",

          // Flexbox & Grid
          "gap-2",

          // Typography
          "text-sm"
        ],
        md: [
          // Spacing
          "px-4",

          // Sizing
          "h-10",
          "min-w-10",

          // Flexbox & Grid
          "gap-2",

          // Typography
          "text-sm"
        ],
        lg: [
          // Spacing
          "px-4.5",

          // Sizing
          "h-11",
          "min-w-11",

          // Flexbox & Grid
          "gap-2",

          // Typography
          "text-md"
        ],
        xl: [
          // Spacing
          "px-5",

          // Sizing
          "h-12",
          "min-w-12",

          // Flexbox & Grid
          "gap-2.5",

          // Typography
          "text-md"
        ],
        "2xl": [
          // Spacing
          "px-7",

          // Sizing
          "h-16",
          "min-w-16",

          // Flexbox & Grid
          "gap-3",

          // Typography
          "text-lg"
        ]
      }
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "solid",
        class:
          "text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      },
      {
        color: "secondary",
        variant: "solid",
        class:
          "text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      },
      {
        color: "tertiary",
        variant: "solid",
        class:
          "text-inverted bg-tertiary hover:bg-tertiary/75 active:bg-tertiary/75 disabled:bg-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
      },
      {
        color: "success",
        variant: "solid",
        class:
          "text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
      },
      {
        color: "info",
        variant: "solid",
        class:
          "text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
      },
      {
        color: "warning",
        variant: "solid",
        class:
          "text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
      },
      {
        color: "error",
        variant: "solid",
        class:
          "text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
      },
      {
        color: "surface",
        variant: "solid",
        class:
          "text-inverted bg-surface hover:bg-surface/75 active:bg-surface/75 disabled:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
      },
      {
        color: "primary",
        variant: "outline",
        class:
          "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      },
      {
        color: "secondary",
        variant: "outline",
        class:
          "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      },
      {
        color: "tertiary",
        variant: "outline",
        class:
          "ring ring-inset ring-tertiary/50 text-tertiary hover:bg-tertiary/10 active:bg-tertiary/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
      },
      {
        color: "success",
        variant: "outline",
        class:
          "ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
      },
      {
        color: "info",
        variant: "outline",
        class:
          "ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
      },
      {
        color: "warning",
        variant: "outline",
        class:
          "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
      },
      {
        color: "error",
        variant: "outline",
        class:
          "ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
      },
      {
        color: "surface",
        variant: "outline",
        class:
          "ring ring-inset ring-surface/50 text-surface hover:bg-surface/10 active:bg-surface/10 disabled:bg-transparent dark:disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-surface"
      },
      {
        color: "primary",
        variant: "soft",
        class:
          "text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10"
      },
      {
        color: "secondary",
        variant: "soft",
        class:
          "text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10"
      },
      {
        color: "tertiary",
        variant: "soft",
        class:
          "text-tertiary bg-tertiary/10 hover:bg-tertiary/15 active:bg-tertiary/15 focus:outline-none focus-visible:bg-tertiary/15 disabled:bg-tertiary/10"
      },
      {
        color: "success",
        variant: "soft",
        class:
          "text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10"
      },
      {
        color: "info",
        variant: "soft",
        class:
          "text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10"
      },
      {
        color: "warning",
        variant: "soft",
        class:
          "text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10"
      },
      {
        color: "error",
        variant: "soft",
        class:
          "text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10"
      },
      {
        color: "surface",
        variant: "soft",
        class:
          "text-surface bg-surface/10 hover:bg-surface/15 active:bg-surface/15 focus:outline-none focus-visible:bg-surface/15 disabled:bg-surface/10"
      },
      {
        color: "primary",
        variant: "subtle",
        class:
          "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      },
      {
        color: "secondary",
        variant: "subtle",
        class:
          "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      },
      {
        color: "tertiary",
        variant: "subtle",
        class:
          "text-tertiary ring ring-inset ring-tertiary/25 bg-tertiary/10 hover:bg-tertiary/15 active:bg-tertiary/15 disabled:bg-tertiary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary"
      },
      {
        color: "success",
        variant: "subtle",
        class:
          "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
      },
      {
        color: "info",
        variant: "subtle",
        class:
          "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
      },
      {
        color: "warning",
        variant: "subtle",
        class:
          "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
      },
      {
        color: "error",
        variant: "subtle",
        class:
          "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
      },
      {
        color: "surface",
        variant: "subtle",
        class:
          "text-surface ring ring-inset ring-surface/25 bg-surface/10 hover:bg-surface/15 active:bg-surface/15 disabled:bg-surface/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-surface"
      },
      {
        color: "primary",
        variant: "ghost",
        class:
          "text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "secondary",
        variant: "ghost",
        class:
          "text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "tertiary",
        variant: "ghost",
        class:
          "text-tertiary hover:bg-tertiary/10 active:bg-tertiary/10 focus:outline-none focus-visible:bg-tertiary/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "success",
        variant: "ghost",
        class:
          "text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "info",
        variant: "ghost",
        class:
          "text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "warning",
        variant: "ghost",
        class:
          "text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "error",
        variant: "ghost",
        class:
          "text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "surface",
        variant: "ghost",
        class:
          "text-surface hover:bg-surface/10 active:bg-surface/10 focus:outline-none focus-visible:bg-surface/10 disabled:bg-transparent dark:disabled:bg-transparent"
      },
      {
        color: "primary",
        variant: "link",
        class:
          "text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      },
      {
        color: "secondary",
        variant: "link",
        class:
          "text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      },
      {
        color: "tertiary",
        variant: "link",
        class:
          "text-tertiary hover:text-tertiary/75 active:text-tertiary/75 disabled:text-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-tertiary"
      },
      {
        color: "success",
        variant: "link",
        class:
          "text-success hover:text-success/75 active:text-success/75 disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      },
      {
        color: "info",
        variant: "link",
        class:
          "text-info hover:text-info/75 active:text-info/75 disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      },
      {
        color: "warning",
        variant: "link",
        class:
          "text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      },
      {
        color: "error",
        variant: "link",
        class:
          "text-error hover:text-error/75 active:text-error/75 disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      },
      {
        color: "surface",
        variant: "link",
        class:
          "text-surface hover:text-surface/75 active:text-surface/75 disabled:text-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-surface"
      },
      {
        color: "surface",
        variant: "solid",
        class:
          "text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
      },
      {
        color: "surface",
        variant: "outline",
        class:
          "ring ring-inset ring-accented text-default bg-default hover:bg-disabled active:bg-disabled disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
      },
      {
        color: "surface",
        variant: "soft",
        class:
          "text-default bg-disabled hover:bg-elevated/75 active:bg-elevated/75 focus:outline-none focus-visible:bg-elevated/75 disabled:bg-disabled"
      },
      {
        color: "surface",
        variant: "subtle",
        class:
          "ring ring-inset ring-accented text-default bg-disabled hover:bg-elevated/75 active:bg-elevated/75 disabled:bg-disabled focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
      },
      {
        color: "surface",
        variant: "ghost",
        class:
          "text-default hover:bg-disabled active:bg-disabled focus:outline-none focus-visible:bg-disabled hover:disabled:bg-transparent dark:hover:disabled:bg-transparent"
      },
      {
        color: "surface",
        variant: "link",
        class:
          "text-muted hover:text-default active:text-default disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted"
      }
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
      variant: "solid"
    }
  },
  {
    description: "Used to trigger actions.",
    name: "Button",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/elements/button"
  }
);

export type * as ButtonStyles from "./types";
