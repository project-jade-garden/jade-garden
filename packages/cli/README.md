# @jade-garden/cli

> [!WARNING]
> While most of the code in `@jade-garden/cli` is identical to [`unplugin-jade-garden`](https://www.npmjs.com/package/unplugin-jade-garden), and should have the same outputs, there are no tests to verify.
> Use with caution.

The CLI automatically generates CSS files containing Tailwind CSS [`@apply` directives](https://tailwindcss.com/docs/functions-and-directives#apply-directive)
based on your defined component styles, eliminating the need for manual class matching, prop handling, or type concerns in your final CSS output.

## Why @jade-garden/cli?

Modern front-end development heavily relies on component-based styling and utility-first CSS frameworks like Tailwind CSS.
While `jade-garden` provides a powerful programmatic way to define and manage component styles with variants and slots,
integrating these definitions into your actual CSS output has traditionally required manual effort or complex PostCSS setups.

The CLI solves this challenge by:

- **Automating CSS Generation**: It reads your `jade-garden` CVA and SVA configurations and automatically writes corresponding CSS files using `@apply` directives. This means your `jade-garden` definitions directly translate into CSS that Tailwind will optimize to plain CSS.
- **Streamlining Tailwind Integration:** Forget manually mapping Tailwind classes to `jade-garden` variants. The CLI handles this intelligently, ensuring your component styles are correctly applied in your final stylesheet.
- **Enhancing Performance:** By generating static CSS at build time, it reduces the amount of JavaScript needed for runtime styling, leading to faster page loads and a more performant user experience.
- **Improving Developer Experience:** Focus on defining your design system programmatically with `jade-garden`'s type safety; the CLI takes care of the CSS output that Tailwind will process.

## Quick Start

### Installation

Install `@jade-garden/cli`, `jade-garden`, and `tailwindcss`:

```bash
# Using npm
npm install jade-garden tailwindcss
npm install -D @jade-garden/cli

# Using yarn
yarn add jade-garden tailwindcss
yarn add -D @jade-garden/cli

# Using pnpm
pnpm add jade-garden tailwindcss
pnpm add -D @jade-garden/cli

# Using bun
bun add jade-garden tailwindcss
bun add -D @jade-garden/cli
```

## Usage

You can run the CLI with `npx`, `pnpx`, `bunx`, or install locally.

```bash
# Using npx
npx @jade-garden/cli

# Using pnpx
pnpx @jade-garden/cli

# Using bunx
bunx @jade-garden/cli
```

By default, the CLI will automatically look for configuration files with the following names across your project:
- jade-garden.config.js
- jade-garden.config.ts
- jade-garden.js
- jade-garden.ts
- jade.config.js
- jade.config.ts
- jade.js
- jade.ts

You can also specify where your configuration is by passing the `--config` flag.

```bash
@jade-garden/cli --config ./path/to/config.ts
```

## Configuration

The CLI accepts a `Config` object to customize its behavior:

```ts
// TypeScript
import type { Config } from "@jade-garden/cli";

export default {
  components: []
} satisfies Config;
```

```js
// JavaScript

/** @type {import("@jade-garden/cli").Config} */
export default {
  components: []
} satisfies Config;
```

### Types

```ts
/**
 * The config for the Jade Garden CLI.
 */
export type Config = {
  /**
   * Will empty the output directory on every build.
   *
   * @default false
   */
  clean?: boolean;

  /**
   * **REQUIRES TAILWIND v4**
   *
   * See [the upgrade guide](https://tailwindcss.com/docs/upgrade-guide) for more information.
   *
   * Leverages the Tailwind compiler to replace `@apply` directives with CSS variables.
   *
   * @default false
   */
  compile?: boolean;

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
  components: Record<string, (CVA | SVA)[]>;

  /**
   * The file format for the generated configs, if `createOptions.useStylesheet` is set to `false`.
   *
   * @default "ts"
   */
  configOutput?: "js" | "ts";

  /**
   * The options used to modify your class names for `createCVA` and `createSVA`.
   *
   * Use with `jade-garden` to ensure consistent output of your CSS.
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
  createOptions?: CreateOptions;

  /**
   * The main TailwindCSS file (relative to **project root**).
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
   * Add global JSDoc and CSS comments to the top of your file outputs.
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
   * Specify the output directory (relative to **project root**).
   *
   * @default `${process.cwd()}/jade-garden`
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
   * Silence log outputs.
   *
   * Logs that the cli will serve are:
   * - Info - Before an operation occurs.
   * - Success - After an operation completes.
   * - Warning - Before an operation cancels or skips.
   *
   * @default false
   */
  silent?: boolean;
};
```

## How It Works (Conceptual)

1. **Configuration Intake**: The plugin receives your `jade-garden` components.

2. **CSS Transformation**: For each component, the plugin intelligently parses the base, variants, compoundVariants, slots, and compoundSlots.

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
