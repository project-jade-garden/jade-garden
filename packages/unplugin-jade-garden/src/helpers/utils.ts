import { kebabCase } from "es-toolkit";
import { cx } from "jade-garden/class-utils";

/* ===================== Utils ===================== */

/**
 * Returns the class names for the `raw` method in `cva` and `sva` functions.
 * Constructs a raw class name based on the component's name, slot, and variants.
 *
 * @param {object} options - The options object.
 * @param {Record<string, any> | undefined} options.compoundVariants - The compound variants object.
 * @param {string | undefined} options.name - The component name.
 * @param {Record<string, any> | undefined} options.props - The props object.
 * @param {Record<string, any> | undefined} options.variants - The variants object.
 * @param {string | undefined} [options.slotKey] - The slot key (for `sva`).
 * @param {Record<string, any> | undefined} [options.slotProps] - The slot props (for `sva`).
 * @returns {string} A string of raw class names.
 */
export const getRawClasses = (options: {
  compoundVariants: Record<string, any> | undefined;
  name: string | undefined;
  props: Record<string, any> | undefined;
  variants: Record<string, any> | undefined;
  slotKey?: string;
  slotProps?: Record<string, any>;
}): string => {
  const { compoundVariants, name, props, slotKey, slotProps, variants } = options;
  if (!name) return cx(props?.class, props?.className);

  // * "prefix-name--slot"
  const prefix = `${kebabCase(name)}${slotKey ? `--${kebabCase(slotKey)}` : ""}`;

  // * Exit early if variants do not exist or is not an object
  if (typeof variants !== "object" || Array.isArray(variants)) {
    return cx(prefix, props?.class, props?.className);
  }

  let result = prefix;

  for (const variant of Object.keys(variants)) {
    const variantObj = (variants as Record<string, any>)[variant];
    if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

    const variantKey = slotProps?.[variant] ?? props?.[variant] ?? compoundVariants?.[variant];

    // * "__variant--variantKey"
    const suffix = variant ? `__${kebabCase(variant)}${variantKey ? `--${kebabCase(variantKey)}` : ""}` : "";

    // * "prefix-name--slot__variant--variantKey"
    result += ` ${prefix}${suffix}`;
  }

  return cx(result, props?.class, props?.className);
};
