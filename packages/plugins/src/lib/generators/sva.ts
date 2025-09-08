import { kebabCase } from "es-toolkit";
import { cx, type JadeGarden, prefixClasses } from "jade-garden";
import type { SVA } from "../types";

/* ===================== SVA ===================== */

export const generateSVAStyles = (config: SVA, classNameConfig: JadeGarden.ClassNameConfig): string => {
  const mergeFn = classNameConfig?.mergeFn ?? cx;
  const jgPrefix = classNameConfig?.jgPrefix;
  const twPrefix = classNameConfig?.twPrefix;

  const componentName = `${jgPrefix ? `${jgPrefix}\\:` : ""}${kebabCase(config.name as string)}`;

  let cssOutput = "";

  // Compound slots
  if (config.compoundSlots) {
    for (const compoundSlot of config.compoundSlots) {
      const variantConditions = Object.keys(compoundSlot)
        .filter((key) => key !== "slots" && key !== "class" && key !== "className")
        .map((key) => `__${kebabCase(key)}--${kebabCase(compoundSlot[key] as string)}`)
        .join("");

      const combinedSelectors = compoundSlot.slots
        .map((slot) => `.${componentName}--${kebabCase(String(slot))}${variantConditions}`)
        .join(",\n  ");

      let applyRules = mergeFn(compoundSlot.class, compoundSlot.className);
      if (applyRules && twPrefix) {
        applyRules = prefixClasses(twPrefix, applyRules.split(" "));
      }

      if (applyRules) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${combinedSelectors} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Slots and their base classes
  for (const slot in config.slots) {
    let applyRules = mergeFn(config.slots[slot]);
    if (applyRules && twPrefix) {
      applyRules = prefixClasses(twPrefix, applyRules.split(" "));
    }

    if (applyRules) {
      cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}--${kebabCase(slot)} {\n    @apply ${applyRules};\n  }`;
    }
  }

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      for (const slot in config.slots) {
        if (compoundVariant.class?.[slot] || compoundVariant.className?.[slot]) {
          const componentSlot = `.${componentName}--${kebabCase(slot)}`;
          const variantConditions = Object.keys(compoundVariant)
            .filter((key) => key !== "class" && key !== "className" && key !== slot)
            .map((key) => `${componentSlot}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`)
            .join("");

          let applyRules = mergeFn(compoundVariant.class?.[slot], compoundVariant.className?.[slot]);
          if (applyRules && twPrefix) {
            applyRules = prefixClasses(twPrefix, applyRules.split(" "));
          }

          if (applyRules) {
            cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${componentSlot}${variantConditions} {\n    @apply ${applyRules};\n  }`;
          }
        }
      }
    }
  }

  // Slot variants
  if (config.variants) {
    for (const variantName in config.variants) {
      const variantTypes = config.variants[variantName];

      for (const variantType in variantTypes) {
        const slots = variantTypes[variantType];

        for (const slot in slots) {
          let applyRules = mergeFn(slots[slot]);
          if (applyRules && twPrefix) {
            applyRules = prefixClasses(twPrefix, applyRules.split(" "));
          }

          if (applyRules) {
            const componentSlot = `.${componentName}--${kebabCase(slot)}`;
            cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${componentSlot}${componentSlot}__${kebabCase(variantName)}--${kebabCase(variantType)} {\n    @apply ${applyRules};\n  }`;
          }
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
