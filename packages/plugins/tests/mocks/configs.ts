import type { Options } from "../../src/lib/types";
import { buttonConfig, noBaseCVA, noNameCVA } from "../fixtures/jade-garden/cva";
import { alertConfig, noNameSVA, noSlotsSVA } from "../fixtures/jade-garden/sva";
import { targetDir } from "./dirPaths";

export const configs = { components: [alertConfig, buttonConfig] };
export const cvaConfig = { components: { cva: [buttonConfig] } };
export const noBaseAndSlots = { components: [noBaseCVA, noSlotsSVA] };
export const noNames = { components: [noNameCVA, noNameSVA] };
export const svaConfig = { components: { sva: [alertConfig] } };
export const throwsConfig = {
  1: {
    2: {
      3: {
        4: {
          5: {
            configs
          }
        }
      },
      eject: {}
    }
  }
};

const entry = targetDir;

export const cssTestCases: { label: string; opts: Options }[] = [
  {
    label: "default `styleConfig`",
    opts: {
      entry
    }
  },
  {
    label: "with `classNameConfig.prefix`",
    opts: {
      entry
    }
  },
  {
    label: "with `classNameConfig.mergeFn`",
    opts: {
      entry
    }
  },
  {
    label: "with `classNameConfig.prefix` and `classNameConfig.mergeFn`",
    opts: {
      entry
    }
  }
];
