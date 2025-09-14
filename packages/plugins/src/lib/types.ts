import type { CreateOptions, cva, sva } from "jade-garden";

/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

export type ComponentMetaConfig = CVA["metaConfig"] & SVA["metaConfig"];

/**
 * **FOR LIBRARY AUTHORS**
 *
 * Add global JSDoc and CSS comments to the top of the file.
 */
export type MetaConfig = {
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
   * The options used to modify your custom merge functions (`createCVA` and `createSVA`).
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
   * **FOR LIBRARY AUTHORS**
   *
   * Add global JSDoc and CSS comments to the top of the file.
   *
   * @default {}
   */
  metaConfig?: MetaConfig;

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

export type PluginInstance<T> = (options?: Options | undefined) => T;

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

export type CVA = ReturnType<typeof cva>;
export type CVAConfig = CVA["styleConfig"];

/* -----------------------------------------------------------------------------
 * SVA
 * -----------------------------------------------------------------------------*/

export type SVA = ReturnType<typeof sva>;
export type SVAConfig = SVA["styleConfig"];
