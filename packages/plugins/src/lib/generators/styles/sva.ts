import { kebabCase } from "es-toolkit";
import { type CreateOptions, cx, type SVAConfig } from "jade-garden";

/* ===================== SVA ===================== */

export const generateSVAStyles = (config: SVAConfig<any, any>, options: CreateOptions): string => {
  const mergeFn = options?.mergeFn ?? cx;
  const prefix = options?.prefix;

  const componentName = `${prefix ? `${prefix}\\:` : ""}${kebabCase(config.name as string)}`;

  let cssOutput = "";

  // Compound slots
  if (config.compoundSlots) {
    for (const compoundSlot of config.compoundSlots) {
      const variantConditions = Object.keys(compoundSlot)
        .filter((key) => key !== "slots" && key !== "class" && key !== "className")
        .map((key) => `__${kebabCase(key)}--${kebabCase(compoundSlot[key] as string)}`)
        .join("");

      const combinedSelectors = compoundSlot.slots
        // TODO
        // biome-ignore lint/suspicious/noTsIgnore: There seems to be an internal build issue with `unplugin-jade-garden` in the `generators` directory. Switching between `dist` and `src` you will see the issue. Setting "@ts-ignore" for now.
        // @ts-ignore: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type.
        .map((slot) => `.${componentName}--${kebabCase(String(slot))}${variantConditions}`)
        .join(",\n  ");

      const applyRules = mergeFn(compoundSlot.class, compoundSlot.className);

      if (applyRules) {
        cssOutput += `${cssOutput.length ? "\n\n" : ""}  ${combinedSelectors} {\n    @apply ${applyRules};\n  }`;
      }
    }
  }

  // Slots and their base classes
  for (const slot in config.slots) {
    const applyRules = mergeFn(config.slots[slot]);

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

          const applyRules = mergeFn(compoundVariant.class?.[slot], compoundVariant.className?.[slot]);

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
          const applyRules = mergeFn(slots[slot]);

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
