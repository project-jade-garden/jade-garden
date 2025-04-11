// * Workaround to prevent types from being exposed to developers in "jade-garden"
import { convertCase } from "../../../../jade-garden/src/utils";
import type { CVA } from "../types";

/* ===================== CVA ===================== */

export const generateCVAStyles = (methods: CVA): string => {
  const { config, mergeClass, rawConfig } = methods;

  const cc = rawConfig.caseConvention;
  const pf = rawConfig.prefix;
  const componentName = convertCase(`${pf ? `${pf}-` : ""}${config.name}`, cc);

  let cssOutput = config.base ? `  .${componentName} {\n    @apply ${mergeClass(config.base)};\n  }` : "";

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      const variantConditions = Object.keys(compoundVariant)
        .filter((key) => key !== "class" && key !== "className")
        .map(
          (key) =>
            `.${componentName}.${componentName}__${convertCase(key, cc)}--${convertCase(compoundVariant[key] as string, cc)}`
        )
        .join(",\n  ");

      const applyRules = mergeClass(compoundVariant.class, compoundVariant.className);

      if (variantConditions && applyRules.length) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${variantConditions} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Variants
  if (config.variants) {
    for (const variant in config.variants) {
      const variantKeys = config.variants[variant];

      for (const variantKey in variantKeys) {
        const applyRules = mergeClass(variantKeys[variantKey]);

        if (!applyRules.length) continue;
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}.${componentName}__${convertCase(variant, cc)}--${convertCase(variantKey, cc)} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
