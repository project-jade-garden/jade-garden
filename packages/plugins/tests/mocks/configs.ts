import { cn } from "jade-garden";
import type { Options } from "../../src/lib/types";
import { buttonConfig, noBaseCVA, noNameCVA } from "../fixtures/jade-garden/cva";
import { alertConfig, noNameSVA, noSlotsSVA } from "../fixtures/jade-garden/sva";
import { targetDir } from "./dirPaths";

type TestCase = { label: string; opts: Options };

export const configs = { components: [alertConfig, buttonConfig] };
export const cvaConfig = { cva: [buttonConfig] };
export const noBaseAndSlots = { components: [noBaseCVA, noSlotsSVA] };
export const noNames = { components: [noNameCVA, noNameSVA] };
export const svaConfig = { sva: [alertConfig] };

const entry = targetDir;

export const configTestCases: TestCase[] = [
  {
    label: "default `configOutput`",
    opts: {
      createOptions: {
        useStylesheet: false
      },
      entry
    }
  },
  {
    label: '`configOutput` set to "js"',
    opts: {
      configOutput: "js",
      createOptions: {
        useStylesheet: false
      },
      entry
    }
  }
];

export const stylesheetTestCases: TestCase[] = [
  {
    label: "default `styleConfig`",
    opts: {
      createOptions: {
        useStylesheet: true
      },
      entry
    }
  },
  {
    label: "with `createOptions.prefix`",
    opts: {
      createOptions: {
        prefix: "jg",
        useStylesheet: true
      },
      entry
    }
  },
  {
    label: "with `createOptions.mergeFn`",
    opts: {
      createOptions: {
        mergeFn: cn,
        useStylesheet: true
      },
      entry
    }
  },
  {
    label: "with `createOptions.prefix` and `createOptions.mergeFn`",
    opts: {
      createOptions: {
        mergeFn: cn,
        prefix: "jg",
        useStylesheet: true
      },
      entry
    }
  }
];
