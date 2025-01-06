import { transformStr } from "./transformStr";
import type { GSProps } from "./types";

export const generateSlots = <A extends string>(componentName: string, anatomy: A[], props?: GSProps) => {
  const caseConvention = props?.caseConvention ?? "kebab";
  const prefix = props?.prefix ?? "";

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
