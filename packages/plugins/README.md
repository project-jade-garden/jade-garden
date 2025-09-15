# unplugin-jade-garden

`unplugin-jade-garden` utilizes [`unplugin`](https://unplugin.unjs.io/) to seamlessly integrate your `jade-garden` CVA (Class Variance Authority) and SVA (Slots Variance Authority) configurations
directly into your build process. It automatically generates CSS files containing Tailwind CSS [`@apply` directives](https://tailwindcss.com/docs/functions-and-directives#apply-directive)
based on your defined component styles, eliminating the need for manual class matching, prop handling, or type concerns in your final CSS output.

## Why unplugin-jade-garden?

Modern front-end development heavily relies on component-based styling and utility-first CSS frameworks like Tailwind CSS.
While `jade-garden` provides a powerful programmatic way to define and manage component styles with variants and slots,
integrating these definitions into your actual CSS output has traditionally required manual effort or complex PostCSS setups.

`unplugin-jade-garden` solves this challenge by:

- **Automating CSS Generation**: It reads your `jade-garden` CVA and SVA configurations and automatically writes corresponding CSS files using `@apply` directives. This means your `jade-garden` definitions directly translate into CSS that Tailwind will optimize to plain CSS.
- **Streamlining Tailwind Integration:** Forget manually mapping Tailwind classes to `jade-garden` variants. The plugin handles this intelligently, ensuring your component styles are correctly applied in your final stylesheet.
- **Enhancing Performance:** By generating static CSS at build time, it reduces the amount of JavaScript needed for runtime styling, leading to faster page loads and a more performant user experience.
- **Improving Developer Experience:** Focus on defining your design system programmatically with `jade-garden`'s type safety; the plugin takes care of the build-time CSS output.
- **Cross-Build Tool Compatibility:** Leveraging [`unplugin`](https://unplugin.unjs.io/), it offers native support for popular bundlers like **Rollup**, **Rspack**, **Vite**, and **Webpack**, ensuring a consistent setup across different projects.

## Quick Start

### Installation

Install `unplugin-jade-garden` and `jade-garden`:

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
import { cva, sva } from "jade-garden";

// Define some example CVA and SVA configs
const buttonConfig = cva({
  base: "...",
  variants: { ... }
});

const card = sva({
  base: { ... },
  slots: ["content", "footer", "header"],
  variants: { ... }
});

export default defineConfig({
  plugins: [
    jadeGardenPlugin({
      components: {
        ui: [button, card]
      },

      // Required: The entry point for your main CSS/Tailwind file.
      // This path is relative to your project root.
      // E.g., "./styles/index.css" or "css/main.css"
      entry: "src/app.css"
    })
  ]
});
```

### Build Tool Specific Setup

#### Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import jadeGardenPlugin from "unplugin-jade-garden/vite";

export default defineConfig({
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
});
```

#### Rollup

```js
// rollup.config.js
import jadeGardenPlugin from "unplugin-jade-garden/rollup";

export default {
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
};
```

#### Webpack

```js
// webpack.config.js
const jadeGardenPlugin = require("unplugin-jade-garden/webpack");

module.exports = {
  plugins: [
    jadeGardenPlugin({ /* options */ })
  ]
};
```

#### Rspack

```js
// rspack.config.js
const jadeGardenPlugin = require("unplugin-jade-garden/rspack");

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
   * Will empty the output directory on every build.
   *
   * @default false
   */
  clean?: boolean;

  /**
   * An object containing arrays of `cva` and `sva` components.
   *
   * If `createOptions.useStylesheet` is set to `true`, **css** files will be generated.
   *
   * Otherwise, components will generate based on the `configOutput`.
   *
   * Object keys will generate directories in root of `outDir`.
   *
   * @default {}
   *
   * @example
   * ```ts
   * {
   *   components: {
   *     components: [accordion, alert, card],
   *     cva: [headingCVA, iconCVA, progressCVA],
   *     sva: [menuSVA, popoverSVA, skeletonSVA],
   *     ui: [button, image, input]
   *   },
   *   // Generates components if `createOptions.useStylesheet` is set to false.
   *   // Defaults to TypeScript.
   *   configOutput: "js",
   *   createOptions: {
   *     // Generates CSS files if set to `true`, otherwise output components.
   *     // Defaults to `false`.
   *     useStylesheet: true
   *   },
   *   entry: "./styles/main.css"
   * }
   * ```
   */
  components?: Record<string, (CVA | SVA)[]>;

  /**
   * The file format for the generated configs, if `createOptions.useStylesheet` is set to `false`.
   *
   * @default "ts"
   */
  configOutput?: "js" | "ts";

  /**
   * The options used to modify your class names for `createCVA` and `createSVA`.
   *
   * Use with `unplugin-jade-garden` to ensure consistent output of your CSS.
   *
   * @default {}
   *
   * @example
   * ```ts
   * import type { CreateOptions } from "jade-garden";
   * import { cn, createCVA, createSVA } from "jade-garden";
   *
   * export const createOptions: CreateOptions = {
   *   mergeFn: cn,
   *   prefix: "jg",
   *   useStylesheet: true
   * };
   *
   * export const cva = createCVA(createOptions);
   * export const sva = createSVA(createOptions);
   * ```
   */
  createOptions?: {
    /**
    * The function used to merge the classes.
    */
    mergeFn?: MergeFn;
    /**
    * The prefix for the class name.
    */
    prefix?: string;
    /**
    * Determines if the component returns classes for a stylesheet or not.
    * If `true` the class name generated is a combination of `base` and `variant` keys.
    * If `false`, defaults to the standard class merging functionality.
    *
    * In the plugin, this determines if you are outputting CSS or style configurations.
    */
    useStylesheet?: boolean;
  };

  /**
   * The main TailwindCSS file (relative to **project root**) where the generated CSS files will output.
   *
   * It is **recommended** that the main TailwindCSS file live in a dedicated directory
   * (e.g., `assets`, `css`, `styles`, etc.).
   *
   * @default process.cwd()
   *
   * @example
   * ```ts
   * {
   *   entry: "./styles/main.css"
   * }
   * ```
   */
  entry?: string;

  /**
   * **FOR LIBRARY AUTHORS**
   *
   * Add global JSDoc and CSS comments to the top of your main "index" file.
   *
   * @default {}
   */
  metaConfig?: {
    /**
    * Adds a `description` tag.
    *
    * @see https://jsdoc3.vercel.app/tags/description
    */
    description?: string;

    /**
    * Adds a `license` tag.
    *
    * @see https://jsdoc3.vercel.app/tags/license
    */
    license?: string;

    /**
    * Adds a `name` tag.
    *
    * `name` should be the same as `name` in "**package.json**".
    *
    * @see https://jsdoc3.vercel.app/tags/name
    */
    name?: string;

    /**
    * Adds a `see` tag.
    *
    * @see https://jsdoc3.vercel.app/tags/see
    */
    see?: string;

    /**
    * Adds a `version` tag.
    *
    * `version` should be the same as `version` in "**package.json**".
    *
    * @see https://jsdoc3.vercel.app/tags/version
    */
    version?: string;
  };


  /**
   * Specify the output directory (relative to **`entry`**).
   *
   * @default "jade-garden"
   *
   * @example
   * ```ts
   * {
   *   outDir: "themes/my-theme"
   * }
   * ```
   */
  outDir?: string;

  /**
   * Silence warnings that occur before an operation cancels or skips.
   *
   * @default false
   */
  silent?: boolean;
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

.button.button__variant--primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.button.button__variant--secondary {
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
.card--root.card--root__flat--true {
  @apply shadow-none border border-gray-200;
}
```

4. **File Writing:** This generated CSS is written to the entry file specified in your plugin options.

5. **Tailwind Processing:** When your main Tailwind CSS file is processed by PostCSS (which is usually part of your build setup), these `@apply` directives are expanded into their full utility classes.

This process ensures that your runtime JavaScript bundle remains lean, as styling is handled by static CSS, while you still benefit from the programmatic power and type safety of `jade-garden`.
