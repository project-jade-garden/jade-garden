import { cn } from "jade-garden";
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
      }
    }
  }
};

export const writeTestCases: { label: string; opts: Options }[] = [
  {
    label: "without `classNameConfig`",
    opts: {
      styleConfigs: {},
      entry: targetDir
    }
  },
  {
    label: "with `classNameConfig.jgPrefix`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        jgPrefix: "jg"
      }
    }
  },
  {
    label: "with `classNameConfig.twPrefix`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        twPrefix: "tw"
      }
    }
  },
  {
    label: "with `classNameConfig.mergeFn`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        mergeFn: cn
      }
    }
  },
  {
    label: "with `classNameConfig.jgPrefix` and `classNameConfig.mergeFn`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        jgPrefix: "jg",
        mergeFn: cn
      }
    }
  },
  {
    label: "with `classNameConfig.jgPrefix` and `classNameConfig.twPrefix`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        jgPrefix: "jg",
        twPrefix: "tw"
      }
    }
  },
  {
    label: "with `classNameConfig.mergeFn` and `classNameConfig.twPrefix`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        twPrefix: "tw",
        mergeFn: cn
      }
    }
  },
  {
    label: "with full `classNameConfig`",
    opts: {
      styleConfigs: {},
      entry: targetDir,
      classNameConfig: {
        jgPrefix: "jg",
        twPrefix: "tw",
        mergeFn: cn
      }
    }
  }
];
