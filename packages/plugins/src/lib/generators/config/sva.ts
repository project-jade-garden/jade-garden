import type { SVAConfig } from "jade-garden";

/* -----------------------------------------------------------------------------
 * SVA
 * -----------------------------------------------------------------------------*/

export const generateSVAConfig = (styleConfig: SVAConfig<any, any>): string => {
  return `import { sva } from "../utils";\n\nexport const ${styleConfig.name} = sva(${JSON.stringify(styleConfig, null, 2)});\n`;
};
