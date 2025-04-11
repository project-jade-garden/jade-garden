// * Workaround to prevent types from being exposed to developers in "jade-garden"
import { convertCase } from "../../../../jade-garden/src/utils";
import type { SVA } from "../types";

/* ===================== SVA ===================== */

export const generateSVAStyles = (methods: SVA): string => {
  const { config, mergeClass, rawConfig } = methods;

  const cc = rawConfig.caseConvention;
  const pf = rawConfig.prefix;
  const componentName = convertCase(`${pf ? `${pf}-` : ""}${config.name}`, cc);

  let cssOutput = "";

  // Compound slots
  if (config.compoundSlots) {
    for (const compoundSlot of config.compoundSlots) {
      const variantConditions = Object.keys(compoundSlot)
        .filter((key) => key !== "slots" && key !== "class" && key !== "className")
        .map((key) => `__${convertCase(key, cc)}--${convertCase(compoundSlot[key] as string, cc)}`)
        .join("");

      const combinedSelectors = compoundSlot.slots
        .map((slot) => `.${componentName}--${convertCase(slot, cc)}${variantConditions}`)
        .join(",\n  ");

      const applyRules = mergeClass(compoundSlot.class, compoundSlot.className);

      if (applyRules.length) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${combinedSelectors} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Slots and their base classes
  for (const slot in config.slots) {
    const applyRules = mergeClass(config.slots[slot]);

    if (!applyRules.length) continue;
    cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}--${convertCase(slot, cc)} {\n    @apply ${applyRules};\n  }`;
  }

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      for (const slot in config.slots) {
        if (compoundVariant.class?.[slot] || compoundVariant.className?.[slot]) {
          const prefixSelector = `.${componentName}--${convertCase(slot, cc)}`;
          const variantConditions = Object.keys(compoundVariant)
            .filter((key) => key !== "class" && key !== "className" && key !== slot)
            .map(
              (key) => `${prefixSelector}__${convertCase(key, cc)}--${convertCase(compoundVariant[key] as string, cc)}`
            )
            .join("");

          const applyRules = mergeClass(compoundVariant.class?.[slot], compoundVariant.className?.[slot]);

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
          const applyRules = mergeClass(slots[slot]);

          if (!applyRules.length) continue;

          const prefixSelector = `.${componentName}--${convertCase(slot, cc)}`;
          cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${prefixSelector}${prefixSelector}__${convertCase(variant, cc)}--${convertCase(variantKey, cc)} {\n    @apply ${applyRules};\n  }`;
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
