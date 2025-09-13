import { cx } from "./class-utils";
import type {
  ClassProp,
  CreateOptions,
  MetaConfig,
  RecordClassValue,
  SVA,
  SVAComponent,
  SVAConfig,
  SVAVariants,
  Variants
} from "./types";
import { falsyToString, hasProps, kebabCase } from "./utils";

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

  return <RCV extends RecordClassValue, V extends Variants<RCV>>(
    styleConfig: SVAConfig<RCV, V>,
    metaConfig?: MetaConfig
  ): SVAComponent<RCV, V> => {
    const jg = (props?: SVAVariants<RCV, V>) => {
      type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots is not defined or does not have keys
      if (!styleConfig?.slots || !Object.keys(styleConfig?.slots).length) return slotsFns;

      const slots = styleConfig.slots;
      const compoundSlots = styleConfig?.compoundSlots ?? [];

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
        for (const slotKey of Object.keys(slots)) {
          slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
            return mergeFn(
              slots[slotKey],
              getCompoundSlotClasses({ ...props, ...slotProps })[slotKey],
              slotProps?.class,
              slotProps?.className
            );
          };
        }

        return slotsFns;
      }

      const variants = styleConfig.variants;
      const compoundVariants = Array.isArray(styleConfig.compoundVariants) ? styleConfig.compoundVariants : [];
      const defaultVariants: SVAVariants<RCV, V> =
        typeof styleConfig?.defaultVariants === "object" && !Array.isArray(styleConfig.defaultVariants)
          ? styleConfig.defaultVariants
          : {};

      const getVariantClasses = (slotKey: string, slotProps: SVAVariants<RCV, V> & ClassProp) => {
        if (typeof variants !== "object" || Array.isArray(variants)) return "";
        let result = "";

        for (const variant of Object.keys(variants)) {
          const variantObj = variants[variant];
          if (typeof variantObj !== "object" || Array.isArray(variantObj)) continue;

          const variantKey = slotProps?.[variant] ?? props?.[variant] ?? defaultVariants?.[variant];
          const validKey = falsyToString(variantKey) ?? "false";
          const value = slotKey
            ? mergeFn(variantObj[validKey as keyof (typeof variants)[typeof variant]]?.[slotKey])
            : mergeFn(variantObj[validKey as keyof (typeof variants)[typeof variant]]);

          if (value) result += !result.length ? value : ` ${value}`;
        }

        return result;
      };

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
                const value = mergeFn(className);
                result[slot] += !result[slot].length ? value : ` ${value}`;
              }
            }
          }
        }

        return result;
      };

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
          const configProps = { ...defaultVariants, ...(props ?? {}), ...slotProps };
          return mergeFn(
            slots[slotKey],
            getVariantClasses(slotKey, slotProps),
            getCompoundVariantClasses(configProps)[slotKey],
            getCompoundSlotClasses(configProps)[slotKey],
            slotProps?.class,
            slotProps?.className
          );
        };
      }

      return slotsFns;
    };

    const ujg = (props?: SVAVariants<RCV, V>) => {
      type SlotProps = SVAVariants<typeof slots, typeof variants> & ClassProp;

      const slotsFns: { [key: string]: (slotProps?: SlotProps) => string } = {};

      // * Exit early if slots are not defined or do not have keys
      if (!styleConfig?.slots || !Object.keys(styleConfig.slots).length) return slotsFns;

      // * For `SlotProps` type
      const slots = styleConfig.slots;
      const variants = styleConfig.variants ?? {};

      // * Set `slotsFns`
      for (const slotKey of Object.keys(slots)) {
        slotsFns[slotKey] = (slotProps: SVAVariants<RCV, V> & ClassProp = {}) => {
          const { name, variants } = styleConfig;
          if (!name) return mergeFn(slotProps?.class, slotProps?.className);

          // * "jgPrefix:componentName--componentSlot"
          const component = `${prefix ? `${prefix}:` : ""}${kebabCase(name)}--${kebabCase(slotKey)}`;

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

    const component = (useStylesheet ? ujg : jg) as SVAComponent<RCV, V>;

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
export const sva: SVA = createSVA();
