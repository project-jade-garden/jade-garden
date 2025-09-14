/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

/**
 * A helper type to define the shape of a single data attribute.
 *
 * @template T - The type of the value for the data attribute key.
 * If a string literal union (e.g., "open" | "closed"), it creates a conditional record.
 * If a primitive (e.g., string, boolean), it allows for a simple ClassStrings value.
 */
type Attribute<T> =
  // biome-ignore format: make this type easy to read and understand
  // [data-readonly] [data-current="true"]
  T extends boolean ? Partial<Record<"true" | "false", ClassStrings>> | ClassStrings :
  // [data-index="1"]
  T extends number ? Partial<Record<PropertyKey, ClassStrings>> :
  // Working with strings
  T extends string ?
    // Similar to the boolean data-readonly]
    string extends T ? ClassStrings :
    // Discriminated union [data-state="open"] [data-state="closed"]
    Partial<Record<T, ClassStrings>>
  // Edge Case: only accept types `boolean`, `number`, or `string`.
  : never;

/**
 * An array of {@link ClassValue}.
 */
type ClassArray = ClassValue[];

/**
 * Represents the minimum structure to work with class names.
 * Fully compatible input for `jade-garden/class-utils` functions.
 */
export type ClassStrings = string | string[];

/**
 * **This is the `ClassValue` type from [clsx](https://github.com/lukeed/clsx/tree/master)**.
 * - Represents a value that can be used as a class name.
 * - It can be a `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, an array of ClassValue, or a Record with values of `any`.
 */
export type ClassValue = ClassArray | Record<string, any> | string | number | bigint | null | boolean | undefined;

/**
 * The options used to modify your custom merge functions (`createCVA` and `createSVA`).
 *
 * Use with `unplugin-jade-garden` to ensure consistent output of your CSS.
 *
 * @default {}
 *
 * @example
 * ```ts
 * import type { CreateOptions } from "jade-garden";
 * import { cn, createCVA, createSVA } from "jade-garden";
 *
 * export const createOptions: CreateOptions = {
 *   mergeFn: cn,
 *   prefix: "jg",
 *   useStylesheet: true
 * };
 *
 * export const cva = createCVA(createOptions);
 * export const sva = createSVA(createOptions);
 * ```
 */
export type CreateOptions = {
  /**
   * Overrides the default `cx` utility used in `cva` and `sva` to merge class names.
   *
   * You may provide your own custom function to handle merging class names,
   * `tailwind-merge` for handling class conflicts,
   * or `jade-garden`'s `cn` utility for more performant runtimes.
   *
   * @default cx
   */
  mergeFn?: MergeFn;

  /**
   * The prefix that will prepend generated class names if `useStylesheet` is set to `true.`
   *
   * @default ""
   */
  prefix?: string;

  /**
   * If set to `true`, generates class names based on `name` and keys from `slots` and `variants`.
   *
   * @default false
   *
   * @example
   * ```ts
   * import { createCVA } from "jade-garden/cva";
   *
   * const cva = createCVA({ useStylesheet: true });
   *
   * const button = getClasses({
   *   name: "button",
   *   base: "button",
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
   * button({ size: "small", variant: "primary" });
   * // "button button__size--small button__variant--primary"
   * ```
   */
  useStylesheet?: boolean;
};

/**
 * Represents a function that merges class names.
 *
 * @param {...ClassValue[]} classes - An array of class names to merge.
 * @returns {string} The merged class name string.
 */
export type MergeFn = (...classes: ClassValue[]) => string;

/**
 * Removes undefined from a type.
 *
 * @template T - The type to omit undefined from.
 * @returns {T extends undefined ? never : T} The type with undefined removed.
 */
type OmitUndefined<T> = T extends undefined ? never : T;

/**
 * Provides type safety for the `data` prop within the `traits` function.
 * This type helps define the structure of data attributes based on component properties.
 *
 * @template T - A map where keys are component property names (e.g., "size", "variant")
 * and values are the allowed types for that property (e.g., "small" | "medium").
 *
 * @example
 * ```ts
 * type AccordionItemTraits = {
 *   state: "open" | "closed";
 *   disabled: boolean;
 * };
 *
 * const traits1 = traits<AccordionItemTraits>({
 *   data: {
 *     state: {
 *       open: "is-open",
 *       closed: "is-closed"
 *     },
 *     disabled: {
 *       true: "is-disabled"
 *     }
 *   }
 * });
 * // data-[state=open]:is-open data-[state=closed]:is-closed data-[disabled=true]:is-disabled
 *
 * const traits2 = traits<{
 *   value: boolean;
 *   custom: string;
 *   index: number;
 * }>({
 *   data: {
 *     value: "my-value-123",
 *     custom: "my-class",
 *     index: {
 *       0: "not-active",
 *       1: "is-active"
 *     }
 *   }
 * });
 * // data-[value]:my-value-123 data-[custom]:my-class data-[index="0"]:not-active data-[index="1"]:active
 * ```
 */
export type Traits<T extends Record<string, any>> = {
  [K in keyof T]?: Attribute<T[K]>;
};

/**
 * Extracts the variant props from a component's props type, excluding `class` and `className`.
 *
 * @template Component - The type of the component function.
 * @returns {Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">} The extracted variant props type.
 */
export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>;
