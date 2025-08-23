import type { ClassValue, JadeGarden } from "jade-garden";
import { getRawClasses } from "./utils";

/* ====================== SVA ====================== */

/**
 * Generates class names based on the sva's configuration.
 *
 * @type {JadeGarden.SVA}
 *
 * @example
 * ```ts
 * const button = convertSVA({
 *   name: "button",
 *   slots: { root: "root-class" },
 *   variants: {
 *     size: {
 *       small: { root: "size-small" },
 *       medium: { root: "size-medium" }
 *     },
 *     variant: {
 *       primary: { root: "variant-primary" },
 *       secondary: { root: "variant-secondary" }
 *     }
 *   }
 * });
 *
 * const { root } = button({ size: "small", variant: "primary" });
 * root(); // "button--root button--root__size--small button--root__variant--primary"
 * ```
 */
export const convertSVA: JadeGarden.SVA = <RCV extends JadeGarden.RecordClassValue, V extends JadeGarden.Variants<RCV>>(
  config: JadeGarden.SVAConfig<RCV, V>
): JadeGarden.SVAReturnType<RCV, V> => {
  const components = (props?: JadeGarden.SVAVariants<RCV, V>) => {
    type SlotProps = JadeGarden.SVAVariants<typeof slots, typeof variants> & JadeGarden.ClassProp;

    const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

    // * Exit early if slots is not defined or does not have keys
    if (
      typeof config?.slots !== "object" ||
      Object.keys(config.slots).length === 0 ||
      (typeof config.slots === "object" && Array.isArray(config.slots))
    ) {
      return slotsFns;
    }

    // * For `SlotProps` type
    const slots = config.slots;
    const variants = config.variants ?? {};

    // * Set `slotsFns`
    for (const slotKey of Object.keys(slots)) {
      slotsFns[slotKey] = (slotProps: JadeGarden.SVAVariants<RCV, V> & JadeGarden.ClassProp = {}) => {
        return getRawClasses({
          compoundVariants: config.compoundVariants,
          name: config.name,
          props,
          variants: config.variants,
          slotKey,
          slotProps
        });
      };
    }

    return slotsFns;
  };

  return components as JadeGarden.SVAReturnType<RCV, V>;
};

/**
 * Defines a type-safe structure for an SVA configuration object.
 * This utility allows you to define a SVA config with type checking based on the specified slots.
 *
 * @template S - A string or union of strings representing the slot keys for the component.
 * @returns A function that takes an `SVAConfig` object with the specified slot keys and returns that same configuration object, ensuring type safety.
 *
 * @example
 * ```ts
 * const buttonConfig = defineSVA<"root" | "label">()({
 *   name: "button",
 *   slots: {
 *     root: "base-button",
 *     label: "button-label",
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "button-small",
 *         label: "text-sm"
 *       },
 *       medium: {
 *         root: "button-medium",
 *         label: "text-base"
 *       }
 *     },
 *     color: {
 *       primary: {
 *         root: "bg-blue-500 text-white"
 *       },
 *       secondary: {
 *         root: "bg-gray-300 text-gray-800"
 *       }
 *     }
 *   },
 *   defaultVariants: {
 *     size: "medium",
 *     color: "primary"
 *   }
 * });
 *
 * // OR
 *
 * const defineSVAConfig: ReturnType<typeof defineSVA<"root" | "label">> = (config) => config;
 *
 * const buttonConfig = defineSVAConfig({
 *   // ... config object
 * });
 * ```
 */
export const defineSVA = <Slots extends string>() => {
  return <RCV extends { [S in Slots]?: ClassValue }, V extends JadeGarden.Variants<RCV>>(
    config: JadeGarden.SVAConfig<RCV, V>
  ): JadeGarden.SVAConfig<RCV, V> => config;
};
