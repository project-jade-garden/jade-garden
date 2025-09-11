/* ===================== Types ===================== */

import type { CreateOptions, CVAReturnType, SVAReturnType } from "jade-garden";

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
   * The file format for the generated configs, if `options.useStylesheet` is set to `false`.
   *
   * @default "ts"
   */
  configOutput?: "js" | "ts";

  createOptions?: CreateOptions;

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
   * The plugin will process these configurations to generate files based on `fileOutput`.
   *
   * Object keys will generate directories in root of `outDir`.
   *
   * @default {}
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
   * ```
   */
  styleConfigs?: Record<string, (CVA | SVA)[]>;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

/* ====================== CVA ====================== */

export type CVA = CVAReturnType<any>;

/* ====================== SVA ====================== */

export type SVA = SVAReturnType<any, any>;
