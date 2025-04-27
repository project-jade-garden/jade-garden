import type { TypedCVA, TypedSVA } from "jade-garden";
// * Workaround to prevent types from being exposed to developers in "jade-garden"
import type { MergeClassFn } from "../../../jade-garden/src/types";

/* ===================== Types ===================== */

export type CVA = TypedCVA;

export type Options = {
  /**
   * The entry for the main CSS/Tailwind file
   *
   * *NOTE*: This should be in a directory like `css` or `styles`
   */
  entry?: string;
  // compile?: boolean;
  /**
   * The "cva" and "sva" instances from Jade Garden
   */
  components?: {
    cva?: CVA[];
    sva?: SVA[];
  };
  mergeFn?: MergeClassFn;
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type SVA = TypedSVA<string>;
