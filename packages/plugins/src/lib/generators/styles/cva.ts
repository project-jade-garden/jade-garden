import { kebabCase } from "es-toolkit";
import { type CVAConfig, cx, type PluginConfig } from "jade-garden";

/* ===================== CVA ===================== */

export const generateCVAStyles = (styleConfig: CVAConfig<any>, pluginConfig: PluginConfig): string => {
  const mergeFn = pluginConfig?.mergeFn ?? cx;
  const prefix = pluginConfig?.prefix;

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
          // TODO
          // biome-ignore lint/suspicious/noTsIgnore: There seems to be an internal build issue with `unplugin-jade-garden` in the `generators` directory. Switching between `dist` and `src` you will see the issue. Setting "@ts-ignore" for now.
          // @ts-ignore: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type.
          return `.${componentName}.${componentName}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`;
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
