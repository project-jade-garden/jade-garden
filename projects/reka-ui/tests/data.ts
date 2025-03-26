import { camelCase } from "es-toolkit";

// * Does not include types; the JS export exists: https://github.com/unovue/reka-ui/blob/v2/packages/core/package.json#L74-L81
// @ts-ignore: Module '"reka-ui/constant"' has no exported member 'components'.
import { components as rekaComponents } from "reka-ui/constant";

const _components = rekaComponents as { [key: string]: string[] };

const EXCLUDE_KEYS = ["viewport", "configProvider", "focusScope", "presence", "primitive", "visuallyHidden"];

export const components = Object.keys(_components).reduce(
  (prevVal, currVal) => {
    if (EXCLUDE_KEYS.includes(currVal)) return prevVal;

    const slots = _components[currVal].map((slot) => camelCase(slot.slice(currVal.length)));

    prevVal[currVal] = slots.length === 1 ? ["root"] : slots;

    return prevVal;
  },
  {} as { [key: string]: string | string[] }
);
