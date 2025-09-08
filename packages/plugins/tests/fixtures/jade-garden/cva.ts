import { defineCVA } from "jade-garden/cva";

export const buttonConfig = defineCVA({
  name: "button",
  base: "rounded-full",
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"]
    }
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium"
  }
});

export const noNameCVA = defineCVA({
  base: "rounded-full",
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"]
    }
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium"
  }
});

export const noBaseCVA = defineCVA({
  name: "button",
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"]
    }
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium"
  }
});
