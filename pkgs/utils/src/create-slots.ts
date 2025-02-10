import { camelCase, kebabCase, pascalCase, snakeCase } from "es-toolkit";

export type CSArgs = {
  caseConvention?: "camel" | "kebab" | "pascal" | "snake";
  prefix?: string;
};

/**
 * String manipulation function that returns a string
 * in a `camelCase`, `kebabCase`, `pascalCase`, or `snakeCase` convention.
 * @see [camelCase](https://es-toolkit.slash.page/reference/string/camelCase.html)
 * @see [kebabCase](https://es-toolkit.slash.page/reference/string/kebabCase.html)
 * @see [pascalCase](https://es-toolkit.slash.page/reference/string/pascalCase.html)
 * @see [snakeCase](https://es-toolkit.slash.page/reference/string/snakeCase.html)
 */
const transformStr = (str: string, caseConvention?: CSArgs["caseConvention"]) => {
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

export const createSlots = <A extends string>(componentName: string, anatomy: A[], args?: CSArgs) => {
  const caseConvention = args?.caseConvention ?? "kebab";
  const prefix = args?.prefix ?? "";

  const base = transformStr(`${prefix}-${componentName}`, caseConvention);
  return anatomy.reduce(
    (obj, currVal) => {
      const val = transformStr(currVal, caseConvention);

      obj[currVal] = `${base}__${val}`;
      return obj;
    },
    { base } as Record<A | "base", string>
  );
};
