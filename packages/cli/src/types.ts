import type { cva, sva } from "jade-garden";

/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

export type ComponentMetaConfig = CVA["metaConfig"] & SVA["metaConfig"];

/**
 * The config for the Jade Garden CLI.
 */
export type Config = {
  /**
   * An object containing arrays of `cva` and `sva` styles.
   * Object keys will generate directories in root of `outDir`.
   *
   * @default {}
   *
   * @example
   * ```ts
   * {
   *   styles: {
   *     animations: [],
   *     components: [accordion, alert, button, card],
   *     elements: [heading]
   *   }
   * }
   *
   * // Becomes
   * // jade-garden
   * // ├── components
   * // ├   ├── accordion.ts
   * // ├   ├── alert.ts
   * // ├   ├── button.ts
   * // ├   ├── card.ts
   * // ├   └── index.ts
   * // ├── elements
   * // ├   ├── heading.ts
   * // ├   └── index.ts
   * // └── index.ts
   * ```
   */
  styles: Record<string, (CVA | SVA)[]>;

  /**
   * The file format for the generated configs, if `createOptions.useStylesheet` is set to `false`.
   *
   * @default "ts"
   */
  configOutput?: "js" | "ts";

  /**
   * **FOR LIBRARY AUTHORS**
   *
   * Add a global JSDoc to the top of the file.
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

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

export type CVA = ReturnType<typeof cva<any>>;
export type CVAConfig = CVA["styleConfig"];

/* -----------------------------------------------------------------------------
 * SVA
 * -----------------------------------------------------------------------------*/

export type SVA = ReturnType<typeof sva<any, any, any>>;
export type SVAConfig = SVA["styleConfig"];
