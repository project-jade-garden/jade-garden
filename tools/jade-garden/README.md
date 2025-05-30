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
> Utilizing `traits` requires the [`unplugin-jade-garden`](https://github.com/AGS1130/project-jade-garden/tree/main/tools/unplugin-jade-garden) package to write data attributes to CSS.

```ts
import { cn, cx, cm, traits } from 'jade-garden';

// cn (alias for clsx/lite)
const baseClasses = cn("text-center", true && "font-bold", false && "hidden"); // "text-center font-bold"

// cx (alias for clsx)
const dynamicClasses = cx("flex", { "items-center": true, "justify-between": false }); // "flex items-center"

// cm (Class Manipulator)
const specialClasses = cm("button-primary focus:outline-none", "button-primary", "custom-animation");
// "focus:outline-none custom-animation" - removed "button-primary" and added "custom-animation"

// traits (for data attributes)
const elementTraits = traits({
  className: "transition-colors",
  data: {
    state: {
      open: "block",
      closed: "hidden"
    },
    disabled: "", // Empty string returns no data attribute
    size: "large" // String returns data attribute with attached value
  }
});
// "transition-colors data-[state=open]:block data-[state=closed]:hidden data-[size]:large"
```

## API

`jade-garden` exposes a concise API for defining your styling logic.

<!-- TODO: Need to add more through documentation -->
### Core Exports:

- **Class Utilities**:
  - `cm`: Conditional class merging with include/exclude.
  - `cn`: Alias for clsx/lite.
  - `cx`: Alias for clsx.
  - `traits`: Generates CSS class names and data attributes.

- **CVA (Class Variant Authority)**:
  - `createCVA`: Factory for a customizable CVA function.
  - `cva`: Default CVA implementation for component variants.
  - `defineCVA`: Type-safe helper for CVA configurations.
  - `rawCVA`: Generates "raw" class names based on CVA config.

- **SVA (Slots Variants Authority)**:
  - `createSVA`: Factory for a customizable SVA function.
  - `sva`: Default SVA implementation for multi-part component slots and variants.
  - `defineSVA`: Type-safe helper for SVA configurations.
  - `rawSVA`: Generates "raw" class names based on SVA config for slots.

- **Types**:
  - `ClassValue`: Represents the values that `clsx` can process to generate a class name string.
  - `CVATraits`: Helps define the structure for configuring and using CVA functions (`cva`, `defineCVA`, `rawCVA`).
  - `SVATraits`: Helps define the structure for configuring and using SVA functions (`sva`, `defineSVA`, `rawSVA`).
  - `VariantProps`: Extracts the variant-related props from a component's overall props type.
