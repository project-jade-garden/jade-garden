import { sva } from "jade-garden/sva";

export const cardStyles = sva(
  {
    name: "card",
    slots: ["root", "header", "body", "footer", "title", "description"],
    base: {
      root: [
        // Borders
        "rounded-md",

        // Layout
        "relative",
        "flex",
        "overflow-hidden",

        // Flexbox & Grid
        "flex-col"
      ],
      header: "v-stack-1",
      body: "flex-col flex-1",
      footer: "justify-end",
      title: [
        // Typography
        "text-lg",
        "font-semibold"
      ],
      description: [
        // Typography
        "text-sm"
      ]
    },
    variants: {
      variant: {
        solid: {
          root: "bg-inverted text-inverted"
        },
        outline: {
          root: "bg-default"
        },
        soft: {},
        subtle: {}
      }
    },
    compoundSlots: [
      {
        slots: ["body", "footer", "header"],
        class: "p-6"
      },
      {
        slots: ["body", "footer"],
        class: "flex"
      }
    ],
    compoundVariants: [
      {
        variant: ["outline", "soft", "subtle"],
        class: {
          root: "divide-y divide-default"
        }
      },
      {
        variant: ["outline", "subtle"],
        class: {
          root: "ring ring-default"
        }
      },
      {
        variant: ["soft", "subtle"],
        class: {
          root: "bg-elevated/50"
        }
      }
    ],
    defaultVariants: {
      variant: "outline"
    }
  },
  {
    description: "A container component that displays content in a compact and organized way.",
    name: "Card",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/card"
  }
);

export type * as CardStyles from "./types";
