import { cx } from "./class-utils";
import type {
  ClassProp,
  ClassValue,
  MergeClassFn,
  RecordClassValue,
  SVA,
  SVAConfig,
  SVAReturnType,
  SVAVariants,
  Variants
} from "./types";
import { getRawClasses, getVariantClasses, hasProps } from "./utils";

/* ====================== SVA ====================== */

/**
 * Creates a slots variants authority (SVA) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @returns {SVA} The sva function.
 */
export const create = (mergeClass: MergeClassFn = cx): SVA => {
  return <RCV extends RecordClassValue, V extends Variants<RCV>>(config: SVAConfig<RCV, V>): SVAReturnType<RCV, V> => {
    const components = (props?: SVAVariants<RCV, V>) => {
      type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots is not defined or does not have keys
      if (
        typeof config?.slots !== "object" ||
        Object.keys(config.slots).length === 0 ||
        (typeof config.slots === "object" && Array.isArray(config.slots))
      ) {
        return slotsFns;
      }

      const slots = config.slots;
      const compoundSlots = config?.compoundSlots ?? [];

      const getCompoundSlotClasses = (configProps: SlotProps) => {
        if (!Array.isArray(compoundSlots)) return {};

        const result: Record<string, string> = {};

        for (const {
          slots: slotNames = [],
          class: slotClass,
          className: slotClassName,
          ...slotConfig
        } of compoundSlots) {
          if (hasProps(slotConfig, configProps)) {
            for (const slot of slotNames) {
              if (typeof slot === "string") {
                const classes: string[] = [];
                if (typeof slotClass === "string") classes.push(slotClass);
                if (Array.isArray(slotClass)) classes.push(...slotClass);
                if (typeof slotClassName === "string") classes.push(slotClassName);
                if (Array.isArray(slotClassName)) classes.push(...slotClassName);

                if (!Object.hasOwn(result, slot)) result[slot] = "";
                const value = mergeClass(...classes);
                result[slot] += result[slot].length === 0 ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Exit early if variants do not exist or is not an object
      if (
        typeof config?.variants !== "object" ||
        (typeof config.variants === "object" && Array.isArray(config.variants))
      ) {
        for (const slotKey of Object.keys(slots)) {
          slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
            return mergeClass(
              slots[slotKey],
              getCompoundSlotClasses({ ...props, ...slotProps })[slotKey],
              slotProps?.class,
              slotProps?.className
            );
          };
        }

        return slotsFns;
      }

      const variants = config.variants;
      const compoundVariants = Array.isArray(config.compoundVariants) ? config.compoundVariants : [];
      const defaultVariants =
        typeof config?.defaultVariants === "object" && !Array.isArray(config.defaultVariants)
          ? config.defaultVariants
          : {};

      const defaultsAndProps = { ...defaultVariants, ...(props ?? {}) };

      const getCompoundVariantClasses = (configProps: SlotProps) => {
        if (!Array.isArray(compoundVariants)) return {};

        const result: Record<string, string> = {};

        for (const { class: variantClass, className: variantClassName, ...variantConfig } of compoundVariants) {
          if (hasProps(variantConfig, configProps)) {
            const classObj: Record<string, string> = {};
            Object.assign(classObj, typeof variantClass === "object" ? variantClass : {});
            Object.assign(classObj, typeof variantClassName === "object" ? variantClassName : {});

            for (const slot of Object.keys(classObj)) {
              const className = classObj[slot];
              if (!Object.hasOwn(result, slot)) result[slot] = "";
              if (typeof className === "string") {
                const value = mergeClass(className);
                result[slot] += result[slot].length === 0 ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
          const configProps = { ...defaultsAndProps, ...slotProps };
          return mergeClass(
            slots[slotKey],
            getVariantClasses({ defaultVariants, mergeClass, props, variants, slotKey, slotProps }),
            getCompoundVariantClasses(configProps)[slotKey],
            getCompoundSlotClasses(configProps)[slotKey],
            slotProps?.class,
            slotProps?.className
          );
        };
      }

      return slotsFns;
    };

    return components as SVAReturnType<RCV, V>;
  };
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
 * const buttonConfig = define<"root" | "label">()({
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
 * const defineConfig: ReturnType<typeof define<"root" | "label">> = (config) => config;
 *
 * const buttonConfig = defineConfig({
 *   // ... config object
 * });
 * ```
 */
export const define = <Slots extends string>() => {
  return <RCV extends { [S in Slots]?: ClassValue }, V extends Variants<RCV>>(
    config: SVAConfig<RCV, V>
  ): SVAConfig<RCV, V> => config;
};

/**
 * Implementation of the slots variants authority (SVA) function using the default class merging function.
 *
 * @type {SVA}
 *
 * @example
 * ```ts
 * const button = sva({
 *   slots: {
 *     root: "flex",
 *     item: "px-2 py-1"
 *   },
 *   variants: {
 *     size: {
 *       small: {
 *         root: "text-sm"
 *       },
 *       medium: {
 *         root: "text-base"
 *       }
 *     }
 *   },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: {
 *     size: "medium"
 *   }
 * });
 *
 * const buttonClasses = button({ size: "small" });
 * ```
 */
export const sva: SVA = create();

/**
 * Generates `raw` class names based on the sva's configuration.
 *
 * @type {SVA}
 */
export const raw: SVA = <RCV extends RecordClassValue, V extends Variants<RCV>>(
  config: SVAConfig<RCV, V>
): SVAReturnType<RCV, V> => {
  const components = (props?: SVAVariants<RCV, V>) => {
    type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

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
      slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
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

  return components as SVAReturnType<RCV, V>;
};
