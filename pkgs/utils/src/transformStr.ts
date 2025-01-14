import { camelCase, kebabCase, pascalCase, snakeCase } from "es-toolkit";
import type { CSArgs } from "./types";

/**
 * String manipulation function that returns a string
 * in a `camelCase`, `kebabCase`, `pascalCase`, or `snakeCase` convention.
 * @see [camelCase](https://es-toolkit.slash.page/reference/string/camelCase.html)
 * @see [kebabCase](https://es-toolkit.slash.page/reference/string/kebabCase.html)
 * @see [pascalCase](https://es-toolkit.slash.page/reference/string/pascalCase.html)
 * @see [snakeCase](https://es-toolkit.slash.page/reference/string/snakeCase.html)
 */
export const transformStr = (str: string, caseConvention?: CSArgs["caseConvention"]) => {
  switch (caseConvention) {
    case "camel":
      return camelCase(str);
    case "kebab":
      return kebabCase(str);
    case "pascal":
      return pascalCase(str);
    case "snake":
      return snakeCase(str);
    default:
      return kebabCase(str);
  }
};
