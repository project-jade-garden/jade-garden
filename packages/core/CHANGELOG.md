# jade-garden

## 1.2.1

### Patch Changes

- aef3833: - Fixes exports.
  - Fixes existing bug where internal types in `jade-garden` were moved to the `JadeGarden` namespace.
    - This failed to generate the namespace in `.dts` files.

## 1.2.0

### Minor Changes

- a794d21: ## **Breaking Changes**

  The primary updates simplify the packages `jade-garden` and extends `unplugin-jade-garden`'s capabilities.

  ### `jade-garden`

  - Adds `prefixClasses` for generating class names with prefixes.
    - Use with `unplugin-jade-garden`.

  ```ts
  prefixClasses("has-checked", [
    "bg-indigo-50",
    "text-indigo-900",
    "ring-indigo-200",
    {
      variant: "dark",
      classes: ["bg-indigo-950", "text-indigo-200", "ring-indigo-900"],
    },
  ]);
  // "has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900"
  ```

  - Removes`rawCVA` and `rawSVA`.
    - Refactored as `getClasses`.

  ```ts
  // cva config
  const button = getClasses({
    name: "button",
    base: "button",
    variants: {
      size: { small: "size-2", medium: "size-4" },
      variant: { primary: "bg-red-500", secondary: "bg-blue-500" },
    },
  });
  button({ size: "small", variant: "primary" }); // "button button__size--small button__variant--primary"

  // sva config
  const card = getClasses({
    name: "card",
    slots: { content: "content-class", footer: "footer-class" },
    variants: {
      size: {
        small: { content: "size-2" },
        medium: { content: "size-4" },
      },
    },
  });
  const { content, footer } = card({ size: "small" });
  content(); // "card--content card--content__size--small"
  ```

  - Removes `CVATraits` and `SVATraits`

    - Reafactored as `Traits`

  - Refactors `defineSVA` to require `_slots` (`readonly string[]`) as input.

  ```ts
  const cardSlots = ["content", "footer", "header"] as const;
  type CardSlots = typeof cardSlots[number];

  // Before
  defineSVA<CardSlots>()({
    slots: { ... },
    variants: { ... }
  });

  // After
  defineSVA(cardSlots)({
    slots: { ... },
    variants: { ... }
  });
  ```

  ### `unplugin-jade-garden`

  The plugin adds more options for working with class names and the internal build tool.

  ````ts
  export type Options = {
    /**
     * The build options object used for the internals of the plugin.
     *
     * @default
     * ```ts
     * {
     *   cache: true,
     *   clean: false,
     *   maxDepth: 5,
     *   outDir: "jade-garden"
     * }
     * ```
     */
    build?: {
      /**
       * Utilizes [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)
       * to cache configs for faster rebuilds.
       *
       * @default true
       */
      cache?: boolean;

      /**
       * Will empty the output directory on every build.
       *
       * @default false
       */
      clean?: boolean;

      /**
       * Specify the max depth of nested objects to walk through directory.
       *
       * @default 5
       */
      maxDepth?: number;

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
    };

    /**
     * Nested objects containing arrays of your `jade-garden` CVA and SVA configurations.
     *
     * The plugin will process these configurations to generate the corresponding CSS.
     *
     * Object keys will generate directories in root of `outDir`.
     *
     * @example
     * ```ts
     * {
     *   entry: "./styles/main.css",
     *   styleConfigs: {
     *     path: {
     *       to: {
     *         output: [alertSVA, buttonCVA, cardSVA]
     *       }
     *     }
     *   }
     * }
     * // jade-garden/path/to/output -> alert.css button.css card.css index.css
     * ```
     */
    styleConfigs: StyleConfigs;

    /**
     * The main TailwindCSS file (relative to **project root**) where the generated CSS files will output.
     *
     * It is **recommended** that the main TailwindCSS file live in a dedicated directory
     * (e.g., `assets`, `css`, `styles`, etc.).
     *
     * @example
     * ```ts
     * {
     *   entry: "./styles/main.css"
     * }
     * ```
     */
    entry: string;

    /**
     * The shared options object for overriding generated classes.
     *
     * Used in conjunction with `jade-garden`'s `getClasses` function.
     *
     * @default {}
     *
     * @example
     * ```ts
     * {
     *   classNameConfig: {
     *     jgPrefix: "jg",
     *     mergeFn: twMerge as (...inputs: ClassValue[]) => string;,
     *     twPrefix: "tw"
     *   }
     * }
     * ```
     */
    classNameConfig?: JadeGarden.ClassNameConfig;
  };
  ````

### Patch Changes

- 2b3bf25: update dependencies

  **Deprecated**

  Removed `projects` directory. Have no capacity to maintain 😞

  - `@project-jade-garden/radix-ui`
  - `@project-jade-garden/base-ui`
  - `@project-jade-garden/bits-ui`
  - `@project-jade-garden/kobalte`
  - `@project-jade-garden/reka-ui`
  - `@project-jade-garden/ark-ui`

## 1.1.2

### Patch Changes

- e35d0a1: - Remove workspaces protocol in `projects`
  - Refactors clean package output for publications

## 1.1.1

### Patch Changes

- 10ffe72: Remove redundant type checking
- e1a924b: Update dependencies
- 11bb816: Fixes breaking installation of packages due to no [bun publishing](https://bun.sh/docs/install/catalogs#publishing) command in project.

## 1.1.0

### Minor Changes

- b477fc2: Move internal types in `jade-garden` to the `JadeGarden` namespace.

### Patch Changes

- 38911b6: Fixes ["Typescript inferred type cannot be named without reference"](https://stackoverflow.com/questions/72041763/typescript-inferred-type-cannot-be-named-without-reference) by exposing all types in index.

## 1.0.0

### Major Changes

- f597937: Docs: Significantly enhanced README documentation for `jade-garden` and `unplugin-jade-garden`.
