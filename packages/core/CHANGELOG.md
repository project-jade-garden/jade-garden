# jade-garden

## 2.0.5

### Patch Changes

- 1f8f193: Fix pre/post publication

## 2.0.4

### Patch Changes

- 1cd5180: - Adds `postrestore` command
  - Should fix bad npm exports due to `changeset tag` being the final publish command, **NOT** `bun publish`

## 2.0.3

### Patch Changes

- e25faf3: Fixes package exports for npm

## 2.0.2

### Patch Changes

- c364142: Update dependencies

## 2.0.1

### Patch Changes

- c5ac8bd: Fixes inferred type issue by moving types from `utils.ts` back to `types.ts`.

## 2.0.0

### Major Changes

- f885cc5: Jade Garden has been made more simple to work with the plugins.
  In addition to the component and slots functions, `cva` and `sva` carry the `styleConfig` and `metaConfig` properties.
  These properties enhance the portability of style configurations while generating helpers for library authors when working with the plugins.

  The `sva` function in `jade-garden` is a major breaking feature and deviates from Tailwind Variants.
  The `slots` property has been repurposed to accept a `string[]` that will be responsible for generating the named slot functions and defining the properties that can be used in `base`,
  the new property for defining base classes for each slot.
  The purpose for this change is to provide developers complete documentation of a component's anatomy that can be carried over if using the plugins.

  The plugins' introduces a new feature that generates both CSS and the style configurations.
  If a developer or team is more comfortable working with design systems programmatically,
  they can generate the style configurations to modify locally.
  The CSS remains as an option for UI/UX library authors who want to generate style sheets,
  while having the option to share the style configurations by default.

  The following are breaking changes:

  - `jade-garden`:
    - Removes `defineCVA`, `defineSVA`, and `getClasses`
      - `defineCVA` and `defineSVA` are obsolete now that they have been integrated into `cva` and `sva`.
      - `getClasses` has been integrated into `createCVA` and `createSVA`
    - `createCVA` and `createSVA` accepts an object as a parameter that is a shared type with `unplugin-jade-garden`
      - `mergeFn`: The optional function to merge class names, defaults to `cx`.
      - `prefix`: The prefix for the class name. Applied when `useStylesheet` is set to `true`.
      - `useStylesheet`: Determines if the component returns classes for a stylesheet or not. If `true` the class name generated is a combination of `base` and `variant` keys.
    - Renames `prefixClasses` to `prefixes`
    - `sva` **REQUIRES** `slots`
      - `slots` takes input of `string[]` that represents the full anatomy of slots for a component
      - `base` is the new name for defining base classes for each slot
      - `slots` are generates named slot functions instead of `base`
  - `unplugin-jade-garden`:
    - The plugin options has dropped the `build` property
      - `cache` and `maxDepth` have been dropped
    - `styleConfigs` has been renamed to `components`
    - `classNameConfig` has been renamed to `createOptions`
      - `twPrefix` has been dropped

## 1.2.2

### Patch Changes

- 18c71ff: Updates dependencies

  ### `unplugin-jade-garden`

  Removes dead exports

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
