/* ===================== Types ===================== */

import type { CVAReturnType, SVAReturnType } from "jade-garden";

export type Options = {
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
  // compile?: boolean;

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
  entry?: string;

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
  styleConfigs?: StyleConfigs;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type StyleConfigs = {
  [key: string]: (CVA | SVA)[] | StyleConfigs;
};

export type WalkFn = (args: {
  depth: number;
  isArray: boolean;
  path: string[];
  value: (CVA | SVA)[] | StyleConfigs;
}) => void;

/* ====================== CVA ====================== */

export type CVA = CVAReturnType<any>;

/* ====================== SVA ====================== */

export type SVA = SVAReturnType<any, any>;
