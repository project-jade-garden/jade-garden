import { cx } from "./class-utils";
import type { ClassValue, CreateOptions } from "./types";
import { type ClassProp, falsyToString, hasProps, kebabCase, type MetaConfig, type StringToBoolean } from "./utils";

/* -----------------------------------------------------------------------------
 * SVA
 * -----------------------------------------------------------------------------*/

/**
 * Creates a slots variants authority (SVA) function with a custom merge function.
 *
 * @param {CreateOptions} [options] - Options to manage class names.
 * @returns {SVA} The sva function.
 */
export const createSVA = (options?: CreateOptions): SVA => {
  const { mergeFn = cx, prefix = "", useStylesheet = false } = options ?? {};

  return <S extends string, SV extends SlotVariants<S>>(
    styleConfig: SVAConfig<S, SV>,
    metaConfig?: MetaConfig
  ): SVAComponent<S, SV> => {
    const jg = (props?: SVAVariants<S, SV>) => {
      // * Exit early if slots is not defined or does not have values
      if (!Array.isArray(styleConfig?.slots) || !styleConfig.slots.length) return {};

      const slotsFns: Record<string, (slotProps?: SlotProps<S, SV>) => string> = {};

      const base = styleConfig.base;
      const slots = styleConfig.slots;
      const compoundSlots = styleConfig?.compoundSlots ?? [];

      const getCompoundSlotClasses = (configProps: SlotProps<S, SV>) => {
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

                // * class
                if (typeof slotClass === "string") classes.push(slotClass);
                if (Array.isArray(slotClass)) classes.push(...slotClass);

                // * className
                if (typeof slotClassName === "string") classes.push(slotClassName);
                if (Array.isArray(slotClassName)) classes.push(...slotClassName);

                if (!Object.hasOwn(result, slot)) result[slot] = "";
                const value = mergeFn(...classes);
                result[slot] += !result[slot].length ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Exit early if variants do not exist or is not an object
      if (typeof styleConfig?.variants !== "object" || Array.isArray(styleConfig.variants)) {
        for (const slot of slots) {
          slotsFns[slot] = (slotProps: SlotProps<S, SV> = {}) => {
            return mergeFn(
              base?.[slot],
              getCompoundSlotClasses({ ...props, ...slotProps })[slot],
              slotProps?.class,
              slotProps?.className
            );
          };
        }

        return slotsFns;
      }

      const variants = styleConfig.variants;
      const compoundVariants = Array.isArray(styleConfig.compoundVariants) ? styleConfig.compoundVariants : [];
      const defaultVariants: SVAVariants<S, SV> =
        typeof styleConfig?.defaultVariants === "object" && !Array.isArray(styleConfig.defaultVariants)
          ? styleConfig.defaultVariants
          : {};

      const getVariantClasses = (slot: string, slotProps: SlotProps<S, SV>) => {
        if (typeof variants !== "object" || Array.isArray(variants)) return "";
        let result = "";

        for (const variant of Object.keys(variants)) {
          const variantObj = variants[variant];
          if (typeof variantObj !== "object" || Array.isArray(variantObj)) continue;

          const variantKey = slotProps?.[variant] ?? props?.[variant] ?? defaultVariants?.[variant];
          const validKey = falsyToString(variantKey) ?? "false";
          const value = slot
            ? mergeFn(
                variantObj[validKey as keyof (typeof variants)[typeof variant]]?.[
                  slot as keyof (typeof variants)[typeof variant]
                ]
              )
            : mergeFn(variantObj[validKey as keyof (typeof variants)[typeof variant]]);

          if (value) result += !result.length ? value : ` ${value}`;
        }

        return result;
      };

      const getCompoundVariantClasses = (configProps: SlotProps<S, SV>) => {
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
                const value = mergeFn(className);
                result[slot] += !result[slot].length ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Set `slotsFns`
      for (const slot of slots) {
        slotsFns[slot] = (slotProps: SlotProps<S, SV> = {}) => {
          const configProps = { ...defaultVariants, ...(props ?? {}), ...slotProps };
          return mergeFn(
            base?.[slot],
            getVariantClasses(slot, slotProps),
            getCompoundVariantClasses(configProps)[slot],
            getCompoundSlotClasses(configProps)[slot],
            slotProps?.class,
            slotProps?.className
          );
        };
      }

      return slotsFns;
    };

    const ujg = (props?: SVAVariants<S, SV>) => {
      // * Exit early if slots is not defined or does not have values
      if (!Array.isArray(styleConfig?.slots) || !styleConfig.slots.length) return {};

      const slotsFns: Record<string, (slotProps?: SlotProps<S, SV>) => string> = {};

      // * Set `slotsFns`
      for (const slot of styleConfig.slots) {
        slotsFns[slot] = (slotProps: SlotProps<S, SV> = {}) => {
          const { name, variants } = styleConfig;
          if (!name) return mergeFn(slotProps?.class, slotProps?.className);

          // * "jgPrefix:componentName--componentSlot"
          const component = `${prefix ? `${prefix}:` : ""}${kebabCase(name)}--${kebabCase(slot)}`;

          // * Exit early if variants do not exist or is not an object
          if (typeof variants !== "object" || Array.isArray(variants)) return component;

          let result = component;
          for (const variantName of Object.keys(variants)) {
            const variantObj = variants[variantName];

            if (variantObj && typeof variantObj === "object") {
              const variantType = slotProps?.[variantName] ?? props?.[variantName];

              if (typeof variantType === "string" && variantType in variantObj) {
                // * "jgPrefix:componentName--componentSlot__variantName--variantType"
                result += ` ${component}__${kebabCase(variantName)}--${kebabCase(variantType)}`;
              }
            }
          }

          return mergeFn(result, slotProps?.class, slotProps?.className);
        };
      }

      return slotsFns;
    };

    const component = (useStylesheet ? ujg : jg) as SVAComponent<S, SV>;

    component.styleConfig = styleConfig;
    component.metaConfig = metaConfig ?? {};

    return component;
  };
};

/**
 * Implementation of the slots variants authority (SVA) function using the default class merging function.
 *
 * @type {SVA}
 *
 * @example
 * ```ts
 * const button = sva({
 *   base: {
 *     root: "flex",
 *     item: "px-2 py-1"
 *   },
 *   slots: ["root", "item"],
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
export const sva: SVA = createSVA();

/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

/**
 * **IMPORTANT**
 *
 * This is a core type that defines keys in {@link SVAConfig}.
 *
 * Represents the base for a compound variant or compound slot.
 *
 * @template S - The name of the slots.
 * @template SV - The slot variants.
 */
type CompoundBase<S extends string, SV extends SlotVariants<S>> = {
  [K in keyof SV]?: StringToBoolean<keyof SV[K]> | StringToBoolean<keyof SV[K]>[];
};

/**
 * Represents the default variants for a component.
 *
 * @template S - A union of string literals representing the slots.
 */
type DefaultVariants<S extends string> = {
  [key: string]: {
    [key: string]: SlotsClassValue<S>;
  };
};

/**
 * **IMPORTANT**
 *
 * This is **THE** core type that defines the keys throughout {@link SVAConfig}.
 *
 * Represents the class values for slots, where keys are slot names and values are class names.
 *
 * @template S - The name of the slots.
 */
type SlotsClassValue<S extends string> = {
  [K in S]?: ClassValue;
};

/**
 * Represents the parameters that an `sva` component can take.
 *
 * @template S - The name of the slots.
 * @template SV - The slot variants.
 */
type SlotProps<S extends string, SV extends SlotVariants<S>> = SVAVariants<S, SV> & ClassProp;

/**
 * Defines the structure for slot variants.
 * @template S - A union of string literals representing the slots.
 * @template DV - A record of default variants.
 */
type SlotVariants<S extends string, DV extends DefaultVariants<S> = DefaultVariants<S>> =
  | {
      [K in keyof DV]?: {
        [K2 in keyof DV[K]]?: SlotsClassValue<S>;
      };
    }
  | DefaultVariants<S>;

/**
 * Extracts the variants from the `SVAConfig`.
 *
 * @template S - The name of the slots.
 * @template SV - The variants.
 */
type SVAVariants<S extends string, SV extends SlotVariants<S>> = {
  [K in keyof SV]?: StringToBoolean<keyof SV[K]>;
};

/**
 * Represents the SVA configuration object.
 *
 * @template S - The name of the slots.
 * @template RCV - The record class values.
 * @template SV - The slot variants.
 */
type SVAConfig<S extends string, SV extends SlotVariants<S>> = {
  /**
   * An optional name for the component.
   */
  name?: string;
  /**
   * An array of slots for the component.
   */
  slots: S[] | Readonly<S[]>;
  /**
   * The base classes for each slot.
   */
  base?: Partial<Record<S, ClassValue>>;
  /**
   * The variants for the component.
   */
  variants?: SV;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: Array<
    CompoundBase<S, SV> &
      (
        | {
            class?: SlotsClassValue<S>;
            className?: never;
          }
        | {
            class?: never;
            className?: SlotsClassValue<S>;
          }
      )
  >;
  /**
   * Compound slots allow you to apply classes to multiple slots at once.
   */
  compoundSlots?: Array<{ slots: S[] | Readonly<S[]> } & CompoundBase<S, SV> & ClassProp>;
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: SVAVariants<S, SV>;
};

/**
 * Represents the return type of the SVA function.
 *
 * @template S - The name the of slots.
 * @template RCV - The type of record class values.
 * @template SV - The slot variants.
 */
type SVAComponent<S extends string, SV extends SlotVariants<S>> = ((
  props?: SVAVariants<S, SV>
) => Record<S, (slotProps?: SlotProps<S, SV>) => string>) & {
  metaConfig: MetaConfig;
  styleConfig: SVAConfig<S, SV>;
};

/**
 * Defines the structure for `createSVA`.
 *
 * @template S - The name the of slots.
 * @template RCV - The type of record class values.
 * @template SV - The slot variants.
 */
type SVA = <S extends string, SV extends SlotVariants<S>>(
  styleConfig: SVAConfig<S, SV>,
  metaConfig?: MetaConfig
) => SVAComponent<S, SV>;
