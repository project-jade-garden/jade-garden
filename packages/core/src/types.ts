/* -----------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------*/

/**
 * A helper type to define the shape of a single data attribute.
 *
 * @template T - The type of the value for the data attribute key.
 * If a string literal union (e.g., "open" | "closed"), it creates a conditional record.
 * If a primitive (e.g., `string`, `boolean`), it allows for a simple {@link ClassStrings} value.
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
 * Represents the `class` and `className` props for `cva` and `sva`.
 * Ensures that only one of `class` or `className` is present.
 */
export type ClassProp =
  | {
      class?: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: ClassValue;
    };

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
 * The options used to modify your class names for `createCVA` and `createSVA`.
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
   * The function used to merge the classes.
   */
  mergeFn?: MergeFn;
  /**
   * The prefix for the class name.
   */
  prefix?: string;
  /**
   * Determines if the component returns classes for a stylesheet or not.
   * If `true` the class name generated is a combination of `base` and `variant` keys.
   * If `false`, defaults to the standard class merging functionality.
   */
  useStylesheet?: boolean;
};

/**
 * **FOR LIBRARY AUTHORS**
 *
 * Add JSDoc and CSS comments to components when generating with `unplugin-jade-garden`.
 */
export type MetaConfig = {
  /**
   * Adds a `deprecated` tag.
   *
   * Adds a description if `deprecated` is a string.
   *
   * @see https://jsdoc3.vercel.app/tags/deprecated
   */
  deprecated?: boolean | string;

  /**
   * Adds a `description` tag.
   *
   * @see https://jsdoc3.vercel.app/tags/description
   */
  description?: string;

  /**
   * Adds a `name` tag.
   *
   * `name` should be the same as `name` in style configuration.
   *
   * @see https://jsdoc3.vercel.app/tags/name
   */
  name?: string;

  /**
   * Adds a `see` tag.
   *
   * @see https://jsdoc3.vercel.app/tags/see
   */
  see?: string;
};

/**
 * The merge function signature for `createCVA` and `createSVA`.
 * @param {...ClassValue[]} inputs - A variadic number of arguments of type {@link ClassValue}.
 * @returns {string} A single string of merged class names.
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
 * Converts a string literal "true" or "false" to its boolean type.
 * @template T - The string literal type, e.g., "true" | "false".
 */
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

/**
 * Provides type safety for the `data` prop within the `traits` function.
 * This type helps define the structure of data attributes based on component properties.
 *
 * @template T - A map where keys are component property names (e.g., "size", "variant")
 * and values are the allowed types for that property (e.g., "small" | "medium").
 */
export type Traits<T extends Record<string, Record<string, any>>> = {
  [K in keyof T]?: {
    [A in keyof T[K]]?: Attribute<T[K][A]>;
  };
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
