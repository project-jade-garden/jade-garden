import type { CVAConfig, MergeClassFn, SVAConfig } from "jade-garden";

/* ===================== Types ===================== */

export type CVA = CVAConfig<any>;

export type Options = {
  /**
   * The relative path to the main CSS/Tailwind file where the generated `@apply`
   * directives will be written. This file should typically reside in a
   * dedicated styling directory (e.g., `css`, `styles`).
   *
   * Example: `./styles/components.css`
   */
  entry?: string;

  // TODO: For Tailwind v4
  // compile?: boolean;

  /**
   * An object containing arrays of your `jade-garden` CVA and SVA configurations.
   * The plugin will process these configurations to generate the corresponding CSS.
   */
  components?: {
    cva?: CVA[];
    sva?: SVA[];
  };

  /**
   * An optional custom class merging function. If not provided, the plugin
   * will use `jade-garden`'s default `cx` utility for merging generated class names.
   * You might provide this if you are using `tailwind-merge` or a similar utility
   * to handle class conflicts.
   */
  mergeFn?: MergeClassFn;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type SVA = SVAConfig<any, any>;
