# unplugin-jade-garden

`unplugin-jade-garden` utilizes [`unplugin`](https://unplugin.unjs.io/) to seamlessly integrate your `jade-garden` CVA (Class Variance Authority) and SVA (Slots Variance Authority) configurations
directly into your build process. It automatically generates CSS files containing Tailwind CSS [`@apply` directives](https://tailwindcss.com/docs/functions-and-directives#apply-directive)
based on your defined component styles, eliminating the need for manual class matching, prop handling, or type concerns in your final CSS output.

## Why unplugin-jade-garden?

Modern front-end development heavily relies on component-based styling and utility-first CSS frameworks like Tailwind CSS.
While jade-garden provides a powerful programmatic way to define and manage component styles with variants and slots,
integrating these definitions into your actual CSS output has traditionally required manual effort or complex PostCSS setups.

`unplugin-jade-garden` solves this challenge by:

- **Automating CSS Generation**: It reads your `jade-garden` CVA and SVA configurations and automatically writes corresponding CSS files using `@apply` directives. This means your jade-garden definitions directly translate into optimized, static CSS.
- **Streamlining Tailwind Integration:** Forget manually mapping Tailwind classes to jade-garden variants. The plugin handles this intelligently, ensuring your component styles are correctly applied in your final stylesheet.
- **Enhancing Performance:** By generating static CSS at build time, it reduces the amount of JavaScript needed for runtime styling, leading to faster page loads and a more performant user experience.
- **Improving Developer Experience:** Focus on defining your design system programmatically with jade-garden's type safety; the plugin takes care of the build-time CSS output.
- **Cross-Build Tool Compatibility:** Leveraging unplugin.js, it offers native support for popular bundlers like **Rollup**, **Rspack**, **Vite**, and **Webpack**, ensuring a consistent setup across different projects.

## Quick Start

### Installation

Install unplugin-jade-garden and its peer dependency jade-garden:

```bash
# Using npm
npm install jade-garden
npm install -D unplugin-jade-garden

# Using yarn
yarn add jade-garden
yarn add -D unplugin-jade-garden

# Using pnpm
pnpm add jade-garden
pnpm add -D unplugin-jade-garden

# Using bun
bun add jade-garden
bun add -D unplugin-jade-garden
```

## Usage

`unplugin-jade-garden` integrates with your build tool through its respective `unplugin` adapter.

### Basic Configuration Example (Vite)

```ts
// vite.config.ts
import { defineConfig } from "vite";
import jadeGardenPlugin from "unplugin-jade-garden/vite";
import { defineCVA, defineSVA } from "jade-garden";

// Define some example CVA and SVA configs
const buttonConfig = defineCVA({
  base: "...",
  variants: { ... },
});

const cardConfig = defineSVA<CardSlots>()({
  slots: { ... },
  variants: { ... },
});

export default defineConfig({
  plugins: [
    jadeGardenPlugin({
      // Required: The entry point for your main CSS/Tailwind file.
      // This path is relative to your project root.
      // E.g., "./styles/index.css" or "css/main.css"
      entry: "src/app.css",

      // Provide your jade-garden CVA and SVA configurations here
      components: {
        cva: [buttonConfig], // Array of your CVA configurations
        sva: [cardConfig],   // Array of your SVA configurations
      },

      // Optional: Custom class merging function (defaults to `jade-garden`'s `cx`)
      // mergeFn: customMergeFunction,
    }),
  ],
});
```

### Build Tool Specific Setup

#### Vite

```js
// vite.config.js
import { defineConfig } from 'vite';
import jadeGardenPlugin from 'unplugin-jade-garden/vite';

export default defineConfig({
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
});
```

#### Rollup

```js
// rollup.config.js
import jadeGardenPlugin from 'unplugin-jade-garden/rollup';

export default {
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
};
```

#### Webpack

```js
// webpack.config.js
const jadeGardenPlugin = require('unplugin-jade-garden/webpack');

module.exports = {
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
};
```

#### Rspack

```js
// rspack.config.js
const jadeGardenPlugin = require('unplugin-jade-garden/rspack');

module.exports = {
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
};
```

## Configuration

The plugin accepts an `Options` object to customize its behavior:

```ts
type Options = {
  /**
   * The relative path to the main CSS/Tailwind file where the generated `@apply`
   * directives will be written. This file should typically reside in a
   * dedicated styling directory (e.g., `css`, `styles`).
   *
   * Example: `./styles/components.css`
   */
  entry?: string;
  /**
   * An object containing arrays of your `jade-garden` CVA and SVA configurations.
   * The plugin will process these configurations to generate the corresponding CSS.
   */
  components?: {
    cva?: CVAConfig<any>[]; // Array of CVA configurations
    sva?: SVAConfig<any, any>[]; // Array of SVA configurations
  };
  /**
   * An optional custom class merging function. If not provided, the plugin
   * will use `jade-garden`'s default `cx` utility for merging generated class names.
   * You might provide this if you are using `tailwind-merge` or a similar utility
   * to handle class conflicts.
   */
  mergeFn?: MergeClassFn;
};
```

## How It Works (Conceptual)

1. **Configuration Intake**: The plugin receives your jade-garden CVA and SVA configuration objects.

2. **CSS Transformation**: For each CVA and SVA configuration, the plugin intelligently parses the base, variants, compoundVariants, slots, and compoundSlots.

3. **Tailwind `@apply` Generation**: It then generates corresponding CSS rules using Tailwind's `@apply` directives. For example, a CVA config might generate:

```css
/* src/styles/cva/button.css (output by the plugin) */

.button {
  @apply inline-flex items-center justify-center rounded-md font-medium;
}

.button--primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.button--secondary {
  @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
}

/* src/styles/sva/card.css (output by the plugin) */

/* For SVA components, it generates classes for each slot: */
.card--root {
  @apply relative rounded-lg shadow-md;
}

.card--header {
  @apply p-4 border-b;
}

.card--body {
  @apply p-4;
}

/* ... and their variants, e.g., */
.card--root__flat--true {
  @apply shadow-none border border-gray-200;
}
```

4. **File Writing:** This generated CSS is written to the entry file specified in your plugin options.

5. **Tailwind Processing:** When your main Tailwind CSS file is processed by PostCSS (which is usually part of your build setup), these `@apply` directives are expanded into their full utility classes.


This process ensures that your runtime JavaScript bundle remains lean, as styling is handled by static CSS, while you still benefit from the programmatic power and type safety of `jade-garden`.

## API (Options)

The only direct API surface for unplugin-jade-garden is its configuration Options object, which is passed to the plugin instance for your chosen build tool.

- **`entry`** (Optional)
  - **Type**: `string`
  - **Description**: The file path where the generated CSS with `@apply` directives will be written. Relative to your project root.

- **`components`** (Optional)
  - **Type**: `{ cva?: CVAConfig<any>[]; sva?: SVAConfig<any, any>[]; }`
  - **Description**: An object containing arrays of your `jade-garden` CVA and SVA configuration objects. These are the definitions the plugin will use to generate CSS.

- **`mergeFn`** (Optional)
  - **Type**: `MergeClassFn` (from `jade-garden/types`)
  - **Description:** A custom function to merge class names. If not provided, `jade-garden`'s `cx` utility will be used.
