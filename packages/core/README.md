# Welcome to Jade Garden 🌿

Jade Garden provides a programmatic and type-safe way to manage and generate styles for component-based Headless Design Systems.
It empowers front-end developers to structure their CSS based on design system APIs,
enhancing consistency, maintainability, and performance across any UI framework.

## Quick Start

### Installation

Install `jade-garden` using your preferred package manager:

```bash
# Using npm
npm install jade-garden

# Using yarn
yarn add jade-garden

# Using pnpm
pnpm add jade-garden

# Using bun
bun add jade-garden
```

## Usage

Jade Garden provides powerful utilities for defining styles with variants and slots, alongside general class manipulation.

### CVA (Class Variance Authority)

Define component styles with variants and apply them conditionally.

```ts
import { cva } from "jade-garden";

const button = cva({
  base: "inline-flex items-center justify-center rounded-md font-medium",
  variants: {
    intent: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    },
    size: {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-base",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

// Usage in your component:
// <button class={button({ intent: "secondary", size: "sm" })}>
//   Click Me
// </button>
```

### SVA (Slots Variance Authority)

Manage styles for multi-part components by defining styles for individual "**slots**".

```ts
import { sva } from "jade-garden";

const card = sva({
  slots: {
    root: "relative rounded-lg shadow-md",
    header: "p-4 border-b",
    body: "p-4",
    footer: "p-4 border-t",
  },
  variants: {
    flat: {
      true: {
        root: "shadow-none border border-gray-200",
      },
    },
    layout: {
      compact: {
        header: "py-2 px-3 text-sm",
        body: "py-2 px-3 text-sm",
        footer: "py-2 px-3 text-sm",
      },
    },
  },
});

const { root, header, body, footer } = card({ flat: true, layout: "compact" });

// Usage in your component:
// <div class={root()}>
//   <div class={header()}>Card Header</div>
//   <div class={body()}>Card Body Content</div>
//   <div class={footer()}>Card Footer</div>
// </div>
```

### Class Utilities

Leverage powerful functions for combining, filtering, and generating class names and data attributes.

> [!IMPORTANT]
> Class Utilities under Plugin Functions (see [API](#API)) **WILL NOT** generate CSS based on the classes you've actually used for Tailwind CSS.
> [Tailwind CSS is limited to what it can detect in your source files](https://tailwindcss.com/docs/detecting-classes-in-source-files).
> Styles are generated through [`unplugin-jade-garden`](https://www.npmjs.com/package/unplugin-jade-garden).

```ts
import { cm, cn, cx, prefixClasses, type Traits, traits } from "jade-garden";

// cm (Class Manipulator)
const specialClasses = cm("button-primary focus:outline-none", "button-primary", "custom-animation");
// "focus:outline-none custom-animation" - removed "button-primary" and added "custom-animation"

// cn (alias for clsx/lite)
const baseClasses = cn("text-center", true && "font-bold", false && "hidden"); // "text-center font-bold"

// cx (alias for clsx)
const dynamicClasses = cx("flex", { "items-center": true, "justify-between": false }); // "flex items-center"

// prefixClasses (for Tailwind variants)
const hasCheckedPrefixes = prefixClasses("has-checked", [
  "bg-indigo-50",
  "text-indigo-900",
  "ring-indigo-200",
  { variant: "dark", classes: ["bg-indigo-950", "text-indigo-200", "ring-indigo-900"] }
]);
// "has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"

// traits (for data attributes)
type CustomTraits = Traits<{
  value: boolean;
  custom: string;
  index: number;
}>;

const elementTraits = traits<CustomTraits>({
  data: {
    value: "my-value-123",
    custom: "my-class",
    index: {
      0: "not-active",
      1: "is-active"
    }
  }
});
// data-[value]:my-value-123 data-[custom]:my-class data-[index="0"]:not-active data-[index="1"]:active
```

## API

`jade-garden` exposes a concise API for defining your styling logic.

### Class Utilities
  - `cm`: Conditional class merging with include/exclude.
  - `cn`: Alias for clsx/lite.
  - `cx`: Alias for clsx.
  - **Plugin Functions**:
    - `prefixClasses`: A utility to simplify the maintenance of prefixed CSS classes.
    - `traits`: Generates CSS class names and data attributes.

### CVA (Class Variant Authority)
  - `createCVA`: Factory for a customizable CVA function.
  - `cva`: Default CVA implementation for component variants.

### SVA (Slots Variants Authority)
  - `createSVA`: Factory for a customizable SVA function.
  - `sva`: Default SVA implementation for multi-part component slots and variants.

### Types
  - `ClassStrings`: Represents the minimum structure to work with class names.
  - `ClassValue`: Represents the values that `clsx` can process to generate a class name string.
  - `MergeFn`: Represents a function that merges class names.
  - `Traits`: Helps define the structure for configuring and using `traits`.
  - `VariantProps`: Extracts the variant-related props from a component's overall props type.
