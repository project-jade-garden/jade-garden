import { type CreateOptions, cx } from "jade-garden";
import type { SVAConfig } from "../../types";
import { kebabCase } from "../utils";

/* -----------------------------------------------------------------------------
 * SVA
 * -----------------------------------------------------------------------------*/

export const generateSVAStylesheet = (styleConfig: SVAConfig, createOptions: CreateOptions): string => {
  const mergeFn = createOptions?.mergeFn ?? cx;
  const prefix = createOptions?.prefix;

  const componentName = `${prefix ? `${prefix}\\:` : ""}${kebabCase(styleConfig.name as string)}`;

  // ! DO NOT MOVE THE ORDER OF "Output for" FOR SAKE OF CASCADE ORDER.
  let cssOutput = "";

  // * Output for compound slots
  if (Array.isArray(styleConfig.compoundSlots)) {
    let isFirst = true;

    for (const compoundSlot of styleConfig.compoundSlots) {
      const variantConditions = Object.keys(compoundSlot)
        .filter((key) => key !== "slots" && key !== "class" && key !== "className")
        .map((key) => `__${kebabCase(key)}--${kebabCase(compoundSlot[key] as string)}`)
        .join("");

      const combinedSelectors = compoundSlot.slots
        .map((slot) => `.${componentName}--${kebabCase(String(slot))}${variantConditions}`)
        .join(",\n  ");

      const applyRules = mergeFn(compoundSlot.class, compoundSlot.className);

      if (applyRules) {
        cssOutput += `${!cssOutput.length ? "" : "\n\n"}${isFirst ? "  /* Compound Slots */\n  " : "  "}${combinedSelectors} {\n    @apply ${applyRules};\n  }`;

        if (isFirst) isFirst = false;
      }
    }
  }

  // * Output for slots and their base classes
  if (Array.isArray(styleConfig.slots) && typeof styleConfig.base === "object" && !Array.isArray(styleConfig.base)) {
    let isFirst = true;

    for (const slot of styleConfig.slots) {
      if (!(slot in styleConfig.base)) continue;
      const applyRules = mergeFn(styleConfig.base[slot]);

      if (applyRules) {
        cssOutput += `${!cssOutput.length ? "" : "\n\n"}${isFirst ? "  /* Slots */\n  " : "  "}.${componentName}--${kebabCase(slot)} {\n    @apply ${applyRules};\n  }`;

        if (isFirst) isFirst = false;
      }
    }
  }

  // * Output for compound variants
  if (Array.isArray(styleConfig.compoundVariants)) {
    let isFirst = true;

    for (const compoundVariant of styleConfig.compoundVariants) {
      for (const slot of styleConfig.slots) {
        if (compoundVariant.class?.[slot] || compoundVariant.className?.[slot]) {
          const componentSlot = `.${componentName}--${kebabCase(slot)}`;
          const variantConditions = Object.keys(compoundVariant)
            .filter((key) => key !== "class" && key !== "className" && key !== slot)
            .map((key) => `${componentSlot}__${kebabCase(key)}--${kebabCase(compoundVariant[key] as string)}`)
            .join("");

          const applyRules = mergeFn(compoundVariant.class?.[slot], compoundVariant.className?.[slot]);

          if (applyRules) {
            cssOutput += `${!cssOutput.length ? "" : "\n\n"}${isFirst ? "  /* Compound Variants */\n  " : "  "}${componentSlot}${variantConditions} {\n    @apply ${applyRules};\n  }`;

            if (isFirst) isFirst = false;
          }
        }
      }
    }
  }

  // * Output for slot variants
  if (typeof styleConfig.variants === "object" && !Array.isArray(styleConfig.variants)) {
    let isFirst = true;

    for (const variantName in styleConfig.variants) {
      const variantTypes = styleConfig.variants[variantName];

      for (const variantType in variantTypes) {
        const slots = variantTypes[variantType];

        for (const slot in slots) {
          const applyRules = mergeFn(slots[slot]);

          if (applyRules) {
            const componentSlot = `.${componentName}--${kebabCase(slot)}`;
            cssOutput += `${!cssOutput.length ? "" : "\n\n"}${isFirst ? "  /* Slot Variants */\n  " : "  "}${componentSlot}${componentSlot}__${kebabCase(variantName)}--${kebabCase(variantType)} {\n    @apply ${applyRules};\n  }`;
          }
        }
      }
    }
  }

  return `@layer components {\n${cssOutput}\n}\n`;
};
