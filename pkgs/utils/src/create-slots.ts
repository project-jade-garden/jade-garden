import { transformStr } from "./transformStr";
import type { CSArgs } from "./types";

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
