import { kebabCase } from "es-toolkit";
import { cx } from "jade-garden";
import type { Options, SVA } from "../types";

/* ===================== SVA ===================== */

export const generateSVAStyles = (config: SVA, mergeFn: Options["mergeFn"] = cx): string => {
  const componentName = kebabCase(config.name as string);

  let cssOutput = "";

  // Compound slots
  if (config.compoundSlots) {
    for (const compoundSlot of config.compoundSlots) {
      const variantConditions = Object.keys(compoundSlot)
        .filter((key) => key !== "slots" && key !== "class" && key !== "className")
        .map((key) => `__${kebabCase(key)}--${kebabCase(compoundSlot[key] as string)}`)
        .join("");

      const combinedSelectors = compoundSlot.slots
        .map((slot) => `.${componentName}--${kebabCase(slot)}${variantConditions}`)
        .join(",\n  ");

      const applyRules = mergeFn(compoundSlot.class, compoundSlot.className);

      if (applyRules.length) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${combinedSelectors} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Slots and their base classes
  for (const slot in config.slots) {
    const applyRules = mergeFn(config.slots[slot]);

    if (!applyRules.length) continue;
    cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}--${kebabCase(slot)} {\n    @apply ${applyRules};\n  }`;
  }

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      for (const slot in config.slots) {
        if (compoundVariant.class?.[slot] || compoundVariant.className?.[slot]) {
          const prefixSelector = `.${componentName}--${kebabCase(slot)}`;
          const variantConditions = Object.keys(compoundVariant)
            .filter((key) => key !== "class" && key !== "className" && key !== slot)
            .map((key) => `${prefixSelector}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`)
            .join("");

          const applyRules = mergeFn(compoundVariant.class?.[slot], compoundVariant.className?.[slot]);

          if (applyRules.length) {
            cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${prefixSelector}${variantConditions} {\n    @apply ${applyRules};\n  }`;
          }
        }
      }
    }
  }

  // Slot variants
  if (config.variants) {
    for (const variant in config.variants) {
      const variantKeys = config.variants[variant];

      for (const variantKey in variantKeys) {
        const slots = variantKeys[variantKey];

        for (const slot in slots) {
          const applyRules = mergeFn(slots[slot]);

          if (!applyRules.length) continue;

          const prefixSelector = `.${componentName}--${kebabCase(slot)}`;
          cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${prefixSelector}${prefixSelector}__${kebabCase(variant)}--${kebabCase(variantKey)} {\n    @apply ${applyRules};\n  }`;
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
