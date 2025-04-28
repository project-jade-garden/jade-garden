// * Workaround to prevent internal types from being exposed to developers in "jade-garden"
import type {
  CVAConfig,
  MergeClassFn,
  RecordClassValue,
  SVAConfig,
  Variant,
  Variants
} from "../../../jade-garden/src/types";

/* ===================== Types ===================== */

export type CVA = CVAConfig<Variant>;

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

export type SVA = SVAConfig<RecordClassValue, Variants<RecordClassValue>>;
