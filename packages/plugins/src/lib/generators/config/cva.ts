import type { CVAConfig } from "jade-garden";

/* -----------------------------------------------------------------------------
 * CVA
 * -----------------------------------------------------------------------------*/

export const generateCVAConfig = (styleConfig: CVAConfig<any>): string => {
  return `import { cva } from "../utils";\n\nexport const ${styleConfig.name} = cva(${JSON.stringify(styleConfig, null, 2)});\n`;
};
