// * Workaround to prevent types from being exposed to developers in "jade-garden"
import type { CVARawReturnType, Variant } from "../../../jade-garden/src/cva";
import type { DefaultVariants, SVARawReturnType, SVAVariants, Slots } from "../../../jade-garden/src/sva";

/* ==================== Types ==================== */

export type CVA = CVARawReturnType<Variant>;

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
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type SVA = SVARawReturnType<Slots, SVAVariants<Slots, DefaultVariants<Slots>>>;
