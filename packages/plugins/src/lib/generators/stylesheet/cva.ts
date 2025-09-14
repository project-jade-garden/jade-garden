import { kebabCase } from "es-toolkit/string";
import { type CreateOptions, cx } from "jade-garden";
import type { CVAConfig } from "../../types";

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

export const generateCVAStylesheet = (styleConfig: CVAConfig, createOptions: CreateOptions): string => {
  const mergeFn = createOptions?.mergeFn ?? cx;
  const prefix = createOptions?.prefix;

  const componentName = `${prefix ? `${prefix}\\:` : ""}${kebabCase(styleConfig.name as string)}`;

  // ! DO NOT MOVE THE ORDER OF "Output for" FOR SAKE OF CASCADE ORDER.
  let cssOutput = "";

  // * Output for base class
  if (styleConfig.base) {
    const applyRules = mergeFn(styleConfig.base);
    cssOutput = `  /* Base */\n  .${componentName} {\n    @apply ${applyRules};\n  }`;
  }

  // * Output for compound variants
  if (styleConfig.compoundVariants) {
    let isFirst = true;

    for (const compoundVariant of styleConfig.compoundVariants) {
      const variantConditions = Object.keys(compoundVariant)
        .filter((key) => key !== "class" && key !== "className")
        .map((key) => {
          return `.${componentName}.${componentName}__${kebabCase(key)}--${kebabCase(compoundVariant[key as keyof typeof compoundVariant] as string)}`;
        })
        .join(",\n  ");

      const applyRules = mergeFn(compoundVariant.class, compoundVariant.className);

      if (variantConditions && applyRules) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}${isFirst ? "  /* Compound Variants */\n  " : "  "}${variantConditions} {\n    @apply ${applyRules};\n  }`;

        if (isFirst) isFirst = false;
      }
    }
  }

  // * Output for variants
  if (styleConfig.variants) {
    let isFirst = true;

    for (const variantName in styleConfig.variants) {
      const variantTypes = styleConfig.variants[variantName];

      for (const variantType in variantTypes) {
        const applyRules = mergeFn(variantTypes[variantType]);

        if (applyRules) {
          cssOutput += `${cssOutput.length ? "\n\n" : ""}${isFirst ? "  /* Variants */\n  " : "  "}.${componentName}.${componentName}__${kebabCase(variantName)}--${kebabCase(variantType)} {\n    @apply ${applyRules};\n  }`;

          if (isFirst) isFirst = false;
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
