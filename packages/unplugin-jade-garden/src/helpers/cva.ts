import type { JadeGarden } from "jade-garden";
import { getRawClasses } from "./utils";

/* ====================== CVA ====================== */

/**
 * Generates class names based on the cva's configuration.
 *
 * @type {JadeGarden.CVA}
 *
 * @example
 * ```ts
 * const button = convertCVA({
 *   name: "button",
 *   variants: {
 *     size: {
 *       small: "size-2",
 *       medium: "size-4"
 *     },
 *     variant: {
 *       primary: "bg-red-500",
 *       secondary: "bg-blue-500"
 *     }
 *   }
 * });
 *
 * button({ size: "small", variant: "primary" }) // "button button__size--small button__variant--primary"
 * ```
 */
export const convertCVA: JadeGarden.CVA = <V extends JadeGarden.Variant>(
  config: JadeGarden.CVAConfig<V>
): JadeGarden.CVAReturnType<V> => {
  const component = (
    props?: V extends JadeGarden.Variant ? JadeGarden.CVAVariants<V> & JadeGarden.ClassProp : JadeGarden.ClassProp
  ): string => {
    return getRawClasses({
      compoundVariants: config.compoundVariants,
      name: config.name,
      props,
      variants: config.variants
    });
  };

  return component;
};

/**
 * Defines a type-safe structure for an CVA configuration object.
 * This utility allows you to define a CVA config with type checking.
 *
 * @returns {JadeGarden.CVAConfig<JadeGarden.Variant>} The CVA configuration object.
 *
 * @example
 * ```ts
 * const buttonConfig = defineCVA({
 *   base: "rounded-md",
 *   variants: {
 *     size: {
 *       small: "text-sm",
 *       medium: "text-base"
 *     }
 *   }
 * });
 * ```
 */
export const defineCVA = <V extends JadeGarden.Variant>(config: JadeGarden.CVAConfig<V>): JadeGarden.CVAConfig<V> =>
  config;
