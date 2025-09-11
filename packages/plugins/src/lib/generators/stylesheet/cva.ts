import { kebabCase } from "es-toolkit";
import { type CreateOptions, type CVAConfig, cx } from "jade-garden";

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

export const generateCVAStylesheet = (styleConfig: CVAConfig<any>, options: CreateOptions): string => {
  const mergeFn = options?.mergeFn ?? cx;
  const prefix = options?.prefix;

  const componentName = `${prefix ? `${prefix}\\:` : ""}${kebabCase(styleConfig.name as string)}`;

  let cssOutput = "";

  // Base class
  if (styleConfig.base) {
    const applyRules = mergeFn(styleConfig.base);
    cssOutput = `  .${componentName} {\n    @apply ${applyRules};\n  }`;
  }

  // Compound variants
  if (styleConfig.compoundVariants) {
    for (const compoundVariant of styleConfig.compoundVariants) {
      const variantConditions = Object.keys(compoundVariant)
        .filter((key) => key !== "class" && key !== "className")
        .map((key) => {
          return `.${componentName}.${componentName}__${kebabCase(key)}--${kebabCase(compoundVariant[key as keyof typeof compoundVariant] as string)}`;
        })
        .join(",\n  ");

      const applyRules = mergeFn(compoundVariant.class, compoundVariant.className);

      if (variantConditions && applyRules) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${variantConditions} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Variants
  if (styleConfig.variants) {
    for (const variantName in styleConfig.variants) {
      const variantTypes = styleConfig.variants[variantName];

      for (const variantType in variantTypes) {
        const applyRules = mergeFn(variantTypes[variantType]);

        if (applyRules) {
          cssOutput += `${cssOutput.length ? "\n\n" : ""}  .${componentName}.${componentName}__${kebabCase(variantName)}--${kebabCase(variantType)} {\n    @apply ${applyRules};\n  }`;
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
