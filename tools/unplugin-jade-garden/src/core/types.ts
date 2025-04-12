// * Workaround to prevent types from being exposed to developers in "jade-garden"
import type {
  ClassProp,
  ClassValue,
  MergeClassFn,
  RawConfig,
  RecordClassValue,
  StringToBoolean
} from "../../../jade-garden/src/types";

// * NOTE: Need to recreate types so they don't get exported in multi-entry points in "jade-garden"

/* ==================== Types ==================== */

/**
 * Represents the variant configurations for `cva`.
 * Each variant is a record of class names, keyed by variant values.
 *
 * @example
 * ```ts
 * {
 *   size: {
 *     small: "text-sm py-1 px-2",
 *     medium: "text-base py-2 px-4",
 *   },
 *   intent: {
 *     primary: "bg-blue-500 text-white",
 *     secondary: "bg-gray-200 text-gray-800",
 *   }
 * }
 * ```
 */
type Variant = Record<string, RecordClassValue>;

/**
 * Represents the schema for variant props in `cva`.
 * Each variant prop is typed as a StringToBoolean of the corresponding variant value keys.
 *
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonVariants = CVAVariants<{
 *   size: { small: string; medium: string };
 *   intent: { primary: string; secondary: string };
 * }>;
 * // ButtonVariants = { size?: "small" | "medium"; intent?: "primary" | "secondary" };
 * ```
 */
type CVAVariants<V extends Variant> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `cva` function.
 *
 * @template V - The type of variants.
 * @property {string=} name - Optional component name.
 * @property {ClassValue=} base - The base class name for the component.
 * @property {V=} variants - Variants allow you to create multiple versions of the same component.
 * @property {(V extends Variant ? (CVAVariants<V> | { [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[]; }) & ClassProp : ClassProp)[]=} compoundVariants - Compound variants allow you to apply classes to multiple variants at once.
 * @property {CVAVariants<V>=} defaultVariants - Default variants allow you to set default variants for a component.
 *
 * @example
 * ```ts
 * const buttonConfig: CVAConfig<{
 *   size: { small: string; medium: string };
 *   intent: { primary: string; secondary: string };
 * }> = {
 *   base: "rounded-md",
 *   variants: {
 *     size: { small: "text-sm", medium: "text-base" },
 *     intent: { primary: "bg-blue-500", secondary: "bg-gray-200" }
 *   },
 *   compoundVariants: [
 *     {
 *       size: "small",
 *       intent: "primary",
 *       class: "font-bold"
 *     }
 *   ],
 *   defaultVariants: { size: "medium", intent: "primary" }
 * };
 * ```
 */
type CVAConfig<V extends Variant> = {
  /**
   * The name of the cva component.
   */
  name?: string;
  /**
   * The base class name for the component.
   */
  base?: ClassValue;
  /**
   * Variants allow you to create multiple versions of the same component.
   */
  variants?: V;
  /**
   * Compound variants allow you to apply classes to multiple variants at once.
   */
  compoundVariants?: (V extends Variant
    ? (
        | CVAVariants<V>
        | {
            [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
          }
      ) &
        ClassProp
    : ClassProp)[];
  /**
   * Default variants allow you to set default variants for a component.
   */
  defaultVariants?: CVAVariants<V>;
};

/**
 * Represents the return type of the CVA function.
 *
 * @template V - The type of variants.
 * @returns {(props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string} A function that generates class names based on props.
 *
 * @example
 * ```ts
 * const buttonCVA: CVAReturnType<{ size: { small: string; medium: string } }> = cva({
 *   variants: {
 *     size: {
 *       small: "text-sm",
 *       medium: "text-base"
 *     }
 *   },
 * });
 * const buttonClasses = buttonCVA({ size: "small" }); // Returns a string of class names
 * ```
 */
type CVAReturnType<V extends Variant> = (props?: V extends Variant ? CVAVariants<V> & ClassProp : ClassProp) => string;

/**
 * Represents the return type of the `rawCVA` function.
 * It includes the `CVAReturnType` along with the configuration, merge function, and raw configuration.
 *
 * @template V - The type of variants.
 */
type CVARawReturnType<V extends Variant> = CVAReturnType<V> & {
  config: CVAConfig<V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
};

/**
 * Represents a dictionary of slot class names.
 *
 * @example
 * ```ts
 * {
 *   root: "flex",
 *   item: "px-2 py-1",
 * }
 * ```
 */
type Slots = RecordClassValue;

/**
 * Represents the class values for slots, where keys are slot names and values are class names.
 *
 * @template S - The type of slots.
 * @example
 * ```ts
 * type ButtonSlots = SlotsClassValue<{ root: string; item: string }>;
 * // ButtonSlots = { root?: ClassValue; item?: ClassValue };
 * ```
 */
type SlotsClassValue<S extends Slots> = {
  [K in keyof S]?: ClassValue;
};

/**
 * Represents the default variants for a component.
 *
 * @template S - The type of slots.
 * @example
 * ```ts
 * {
 *   size: {
 *     small: { root: "text-sm" },
 *     medium: { root: "text-base" },
 *   }
 * }
 * ```
 */
type DefaultVariants<S extends Slots> = {
  [key: string]: {
    [key: string]: SlotsClassValue<S>;
  };
};

/**
 * Represents the variants for a component.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonVariants = SVAVariants<
 *   {
 *     root: string;
 *     item: string;
 *   },
 *   {
 *     size: {
 *       small: {
 *         root: string;
 *       };
 *       medium: {
 *         root: string;
 *       };
 *     };
 *   }
 * >;
 * // type ButtonVariants =
 * // | { size?: { small?: { root?: ClassValue }; medium?: { root?: ClassValue } } }
 * // | { size: { small: { root: ClassValue }; medium: { root: ClassValue } } };
 * ```
 */
type SVAVariants<S extends Slots, V extends DefaultVariants<S> = DefaultVariants<S>> =
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
 * @example
 * ```ts
 * type ButtonCompound = CompoundBase<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * >;
 * // ButtonCompound = { size?: "small" | "medium" | ("small" | "medium")[] };
 * ```
 */
type CompoundBase<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]> | StringToBoolean<keyof V[K]>[];
};

/**
 * Represents the props for a component with variants and slots.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @example
 * ```ts
 * type ButtonProps = SVAProps<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * >;
 * // ButtonProps = { size?: "small" | "medium" };
 * ```
 */
type SVAProps<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  [K in keyof V]?: StringToBoolean<keyof V[K]>;
};

/**
 * Represents the configuration object for the `sva` function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @property {string=} name - Optional component name.
 * @property {S=} slots - Slots allow you to separate a component into multiple parts.
 * @property {V=} variants - Variants allow you to create multiple versions of the same component.
 * @property {Array<CompoundBase<S, V> & ( { class?: SlotsClassValue<S>; className?: never; } | { class?: never; className?: SlotsClassValue<S>; } )>=} compoundVariants - Compound variants allow you to apply classes to multiple variants at once.
 * @property {Array<{ slots: Array<keyof S> } & CompoundBase<S, V> & ClassProp>=} compoundSlots - Compound slots allow you to apply classes to multiple slots at once.
 * @property {SVAProps<S, V>=} defaultVariants - Default variants allow you to set default variants for a component.
 *
 * @example
 * ```ts
 * const buttonConfig: SVAConfig<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = {
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } },
 *   compoundVariants: [{ size: "small", class: { root: "font-bold" } }],
 *   compoundSlots: [{ slots: ["root", "item"], class: "rounded" }],
 *   defaultVariants: { size: "medium" }
 * };
 * ```
 */
type SVAConfig<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = {
  /**
   * The name of the sva component.
   */
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

/**
 * Represents the return type of the SVA function.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 * @returns {(props?: SVAProps<S, V>) => { [K in keyof S]: (slotProps?: SVAProps<S, V> & ClassProp) => string }} A function that generates slot-specific class names based on props.
 *
 * @example
 * ```ts
 * const buttonSVA: SVAReturnType<
 *   { root: string; item: string },
 *   { size: { small: { root: string }; medium: { root: string } } }
 * > = sva({
 *   slots: { root: "flex", item: "px-2 py-1" },
 *   variants: { size: { small: { root: "text-sm" }, medium: { root: "text-base" } } }
 * });
 * ```
 */
type SVAReturnType<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = (props?: SVAProps<S, V>) => {
  [K in keyof S]: (slotProps?: SVAProps<S, V> & ClassProp) => string;
};

/**
 * Represents the return type of the `rawSVA` function.
 * It includes the `SVAReturnType` along with the configuration, merge function, and raw configuration.
 *
 * @template S - The type of slots.
 * @template V - The type of variants.
 */
type SVARawReturnType<S extends Slots, V extends SVAVariants<S, DefaultVariants<S>>> = SVAReturnType<S, V> & {
  config: SVAConfig<S, V>;
  mergeClass: MergeClassFn;
  rawConfig: RawConfig;
};

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
