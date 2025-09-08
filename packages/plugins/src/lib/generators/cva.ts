import { kebabCase } from "es-toolkit";
import { cx, type JadeGarden, prefixClasses } from "jade-garden";
import type { CVA } from "../types";

/* ===================== CVA ===================== */

export const generateCVAStyles = (config: CVA, classNameConfig: JadeGarden.ClassNameConfig): string => {
  const mergeFn = classNameConfig?.mergeFn ?? cx;
  const jgPrefix = classNameConfig?.jgPrefix;
  const twPrefix = classNameConfig?.twPrefix;

  const componentName = `${jgPrefix ? `${jgPrefix}\\:` : ""}${kebabCase(config.name as string)}`;

  let cssOutput = "";

  // Base class
  if (config.base) {
    let applyRules = mergeFn(config.base);
    if (applyRules && twPrefix) {
      applyRules = prefixClasses(twPrefix, applyRules.split(" "));
    }

    cssOutput = `  .${componentName} {\n    @apply ${applyRules};\n  }`;
  }

  // Compound variants
  if (config.compoundVariants) {
    for (const compoundVariant of config.compoundVariants) {
      const variantConditions = Object.keys(compoundVariant)
        .filter((key) => key !== "class" && key !== "className")
        .map((key) => {
          // TODO: Need to resolve `any`
          // @ts-expect-error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type.
          return `.${componentName}.${componentName}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`;
        })
        .join(",\n  ");

      let applyRules = mergeFn(compoundVariant.class, compoundVariant.className);
      if (applyRules && twPrefix) {
        applyRules = prefixClasses(twPrefix, applyRules.split(" "));
      }

      if (variantConditions && applyRules) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${variantConditions} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Variants
  if (config.variants) {
    for (const variantName in config.variants) {
      const variantTypes = config.variants[variantName];

      for (const variantType in variantTypes) {
        let applyRules = mergeFn(variantTypes[variantType]);
        if (applyRules && twPrefix) {
          applyRules = prefixClasses(twPrefix, applyRules.split(" "));
        }

        if (applyRules) {
          cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}.${componentName}__${kebabCase(variantName)}--${kebabCase(variantType)} {\n    @apply ${applyRules};\n  }`;
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
