import { cn } from "./class-utils";
import type { ClassProp, ClassValue, MergeClassFn, RawConfig, RecordClassValue, StringToBoolean } from "./types";
import { convertCase, getRawClasses, getVariantClasses, hasProps, mergeConfig } from "./utils";

/* ===================== SVA ===================== */

/**
 * Represents a dictionary of slot class names.
 */
export type Slots = RecordClassValue;

/**
 * Represents the class values for slots, where keys are slot names and values are class names.
 *
 * @template S - The type of slots.
 */
type SlotsClassValue<S extends Slots> = {
  [K in keyof S]?: ClassValue;
};

/**
 * Represents the default variants for a component.
 *
 * @template S - The type of slots.
 */
export type DefaultVariants<S extends Slots> = {
  [key: string]: {
    [key: string]: SlotsClassValue<S>;
  };
};

/**
 * Represents the variants for a component.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
export type SVAVariants<S extends Slots, V extends DefaultVariants<S> = DefaultVariants<S>> =
  | {
      [K in keyof V]?: {
        [K2 in keyof V[K]]?: SlotsClassValue<S>;
      };
    }
  | DefaultVariants<S>;

/**
 * Reusable type for compound styles that apply based on multiple variant combinations.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type CompoundBase<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
};

/**
 * Represents the props for a component with variants and slots.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type SVAProps<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `sva` function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type SVAConfig<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  name?: string;
  /**
   * Slots allow you to separate a component into multiple parts.
   */
  slots?: S;
  /**
   * Variants allow you to create multiple versions of the same component.
   */
  variants?: V;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: Array<
    CompoundBase<S, V> &
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
  compoundSlots?: Array<{ slots: Array<keyof S> } & CompoundBase<S, V> & ClassProp>;
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: SVAProps<S, V>;
};

export type SVAMethods<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  config: SVAConfig<S, V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
};

/**
 * Represents the return type of the SVA function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type SVAReturnType<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = ((props?: SVAProps<S, V>) => {
  [K in keyof S]: ((slotProps?: SVAProps<S, V> & ClassProp) => string) & {
    raw: (slotProps?: SVAProps<S, V> & ClassProp) => string;
  };
}) &
  SVAMethods<S, V>;

/**
 * Creates a Styled Variants API (SVA) function for a component.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @param {SVAConfig<S, V>} config - Configuration options for the SVA function.
 * @returns {SVAReturnType<S, V>} The return type of the SVA function.
 */
type SVA = <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
  config: SVAConfig<S, V>
) => SVAReturnType<S, V>;

/**
 * Creates a Styled Variants API (SVA) function with a custom merge function.
 *
 * @param {MergeClassFn} mergeClass - The function to merge class names.
 * @param {RawConfig} rawConfig - The raw configuration object.
 * @returns {SVA} The sva function.
 */
export const createSVA = (mergeClass: MergeClassFn = cn, rawConfig: RawConfig = {}): SVA => {
  return <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(
    config: SVAConfig<S, V>
  ): SVAReturnType<S, V> => {
    const components = (props?: SVAProps<S, V>) => {
      type SlotProps = SVAProps<typeof slots, typeof variants> & ClassProp;

      const slotsFns: {
        [key: string]: ((slotProps?: SlotProps) => string) & {
          raw: (slotProps?: SVAProps<S, V> & ClassProp) => string;
        };
      } = {};

      // * Exit early if slots is not defined or does not have keys
      if (typeof config?.slots !== "object" || Object.keys(config.slots).length === 0) return slotsFns;

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
          slotsFns[slotKey] = Object.assign(
            (slotProps: SVAProps<S, V> & ClassProp = {}) => {
              return mergeClass(
                slots[slotKey],
                getCompoundSlotClasses({ ...props, ...slotProps })[slotKey],
                slotProps?.class,
                slotProps?.className
              );
            },
            {
              raw: (slotProps?: SVAProps<S, V> & ClassProp) => {
                if (!config.name) return "";

                const className = `${rawConfig.prefix ? `${rawConfig.prefix}-` : ""}${convertCase(config.name, rawConfig.caseConvention)}`;

                return mergeClass(className, slotProps?.class, slotProps?.className);
              }
            }
          );
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
        slotsFns[slotKey] = Object.assign(
          (slotProps: SVAProps<S, V> & ClassProp = {}) => {
            const configProps = { ...defaultsAndProps, ...slotProps };
            return mergeClass(
              slots[slotKey],
              getVariantClasses({ defaultVariants, mergeClass, props, variants, slotKey, slotProps }),
              getCompoundVariantClasses(configProps)[slotKey],
              getCompoundSlotClasses(configProps)[slotKey],
              slotProps?.class,
              slotProps?.className
            );
          },
          {
            raw: (slotProps: SVAProps<S, V> & ClassProp = {}) => {
              return getRawClasses({
                defaultVariants: config.compoundVariants,
                mergeClass,
                name: config.name,
                props,
                rawConfig,
                variants: config.variants,
                slotKey,
                slotProps
              });
            }
          }
        );
      }

      return slotsFns;
    };

    return Object.assign(components, { config, mergeClass, rawConfig }) as SVAReturnType<S, V>;
  };
};

/**
 * Implementation of the Styled Variants API (SVA) function using the default class merging function.
 *
 * @type {SVA}
 */
export const sva: SVA = createSVA();

/**
 * Creates a recipe function that overrides the base `sva` configuration.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @param {SVAReturnType<S, V>} sva - The base `sva` function.
 * @returns {(override: SVAConfig<S, V>) => SVAReturnType<S, V>} A function that returns a new `sva` function with overridden configuration.
 */
export const svaRecipe =
  <S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>>(sva: SVAReturnType<S, V>) =>
  (override: SVAConfig<S, V>): SVAReturnType<S, V> => {
    const configOverride = override ? (mergeConfig(sva.config, override) as SVAConfig<S, V>) : sva.config;
    return createSVA(sva.mergeClass, sva.rawConfig)(configOverride);
  };
