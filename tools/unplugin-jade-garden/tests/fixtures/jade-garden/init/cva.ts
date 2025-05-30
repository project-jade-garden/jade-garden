// * For relative types import: https://stackoverflow.com/a/78037438
import "../../../../../jade-garden/src/types";
import { defineCVA, rawCVA } from "jade-garden/cva";

const buttonConfig = defineCVA({
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

export const button = rawCVA(buttonConfig);
