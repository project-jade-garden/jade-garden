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
      },
      eject: {}
    }
  }
};

const build = {
  styleConfigs: {},
  entry: targetDir
};

export const cssTestCases: { label: string; opts: Required<Options> }[] = [
  {
    label: "without `classNameConfig`",
    opts: {
      build,
      css: {},
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.jgPrefix`",
    opts: {
      build,
      css: {
        classNameOptions: {
          jgPrefix: "jg"
        }
      },
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.twPrefix`",
    opts: {
      build,
      css: {
        classNameOptions: {
          twPrefix: "tw"
        }
      },
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.mergeFn`",
    opts: {
      build,
      css: {
        classNameOptions: {
          mergeFn: cn
        }
      },
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.jgPrefix` and `classNameConfig.mergeFn`",
    opts: {
      build,
      css: {
        classNameOptions: {
          jgPrefix: "jg",
          mergeFn: cn
        }
      },
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.jgPrefix` and `classNameConfig.twPrefix`",
    opts: {
      build,
      css: {
        classNameOptions: {
          jgPrefix: "jg",
          twPrefix: "tw"
        }
      },
      eject: {}
    }
  },
  {
    label: "with `classNameConfig.mergeFn` and `classNameConfig.twPrefix`",
    opts: {
      build,
      css: {
        classNameOptions: {
          twPrefix: "tw",
          mergeFn: cn
        }
      },
      eject: {}
    }
  },
  {
    label: "with full `classNameConfig`",
    opts: {
      build,
      css: {
        classNameOptions: {
          jgPrefix: "jg",
          twPrefix: "tw",
          mergeFn: cn
        }
      },
      eject: {}
    }
  }
];
