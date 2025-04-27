import { kebabCase } from "es-toolkit";
import { cx } from "jade-garden";
import type { CVA, Options } from "../types";

/* ===================== CVA ===================== */

export const generateCVAStyles = (config: CVA, mergeFn: Options["mergeFn"] = cx): string => {
  const componentName = kebabCase(config.name as string);

  let cssOutput = config.base ? `  .${componentName} {\n    @apply ${mergeFn(config.base)};\n  }` : "";

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      const variantConditions = Object.keys(compoundVariant)
        .filter((key) => key !== "class" && key !== "className")
        .map(
          (key) => `.${componentName}.${componentName}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`
        )
        .join(",\n  ");

      const applyRules = mergeFn(compoundVariant.class, compoundVariant.className);

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
        const applyRules = mergeFn(variantKeys[variantKey]);

        if (!applyRules.length) continue;
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}.${componentName}__${kebabCase(variant)}--${kebabCase(variantKey)} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
