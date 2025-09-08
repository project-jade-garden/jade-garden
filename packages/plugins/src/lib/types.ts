/* ===================== Types ===================== */

import type { ClassNameConfig, CVAConfig, SVAConfig } from "jade-garden";

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

    // TODO
    /**
     * **REQUIRES TAILWIND v4**
     *
     * See [the upgrade guide](https://tailwindcss.com/docs/upgrade-guide) for more information.
     *
     * Leverages the Tailwind compiler to replace `@apply` directives with CSS variables.
     *
     * @default false
     */
    // compile?: boolean;

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
  classNameConfig?: ClassNameConfig;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type StyleConfigs = {
  [key: string]: (CVA | SVA)[] | StyleConfigs;
};

/* ====================== CVA ====================== */

export type CVA = CVAConfig<any>;

/* ====================== SVA ====================== */

export type SVA = SVAConfig<any, any>;
