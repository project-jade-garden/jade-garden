import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import { cloneDeep } from "es-toolkit";
import postcss from "rollup-plugin-postcss";
import rollupPlugin from "unplugin-jade-garden/rollup";
import type { Options } from "../src/lib/types";
import { buttonConfig, noBaseCVA } from "./fixtures/jade-garden/cva";
import { alertConfig, noSlotsSVA } from "./fixtures/jade-garden/sva";
import { configs, cssTestCases, cvaConfig, noBaseAndSlots, noNames, svaConfig, throwsConfig } from "./mocks/configs";
import { entryDir, outputDir, rootDir } from "./mocks/dirPaths";
import { build, getPath } from "./utils";

describe("rollup", () => {
  beforeEach(() => {
    const outputDir = getPath(`${rootDir}/jade-garden`);
    if (existsSync(outputDir)) rmdirSync(outputDir, { recursive: true });
  });

  const rollupBuild = async (config: Options) => {
    await build.rollup({
      input: entryDir,
      plugins: [
        rollupPlugin(config),
        postcss({
          extract: true,
          plugins: [require("@tailwindcss/postcss")]
        })
      ]
    });
  };

  describe("edge cases", () => {
    test("empties `outDir`", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = configs;
      await rollupBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      opts.clean = true;
      opts.styleConfigs = { components: { cva: [buttonConfig], sva: [alertConfig] } };
      await rollupBuild(opts);

      // Deleted files
      expect(existsSync(`${outputDir}/alert.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(false);

      // Written files
      expect(existsSync(`${outputDir}/cva/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/cva/index.css`)).toBe(true);
      expect(existsSync(`${outputDir}/sva/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/sva/index.css`)).toBe(true);
    });

    test("override `maxDepth`", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.maxDepth = 10;
      opts.styleConfigs = throwsConfig;
      await rollupBuild(opts);

      const output = getPath(`${rootDir}/jade-garden/1/2/3/4/5/configs/components`);
      expect(existsSync(`${output}/alert.css`)).toBe(true);
      expect(existsSync(`${output}/button.css`)).toBe(true);
      expect(existsSync(`${output}/index.css`)).toBe(true);
    });

    test("prevents name conflicts", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [alertConfig, alertConfig, buttonConfig, buttonConfig] };
      await rollupBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/alert-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });
  });

  describe("no writes", () => {
    test("no names", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noNames;
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noBaseCVA] };
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no slots", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noSlotsSVA] };
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base and no slots", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noBaseAndSlots;
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });
  });

  describe("throws", () => {
    test("`configs` is not valid", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'string' is not assignable to type.
      opts.styleConfigs = "";
      expect(async () => await rollupBuild(opts)).toThrow();
    });

    test("exceeds `maxDepth`", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = throwsConfig;
      expect(async () => await rollupBuild(opts)).toThrow();
    });

    test("invalid config value", async () => {
      const { opts: _opts } = cssTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'undefined' is not assignable to type.
      opts.styleConfigs = { 1: { 2: undefined } };
      expect(async () => await rollupBuild(opts)).toThrow();
    });
  });

  // describe("writes", () => {
  //   test.each(cssTestCases)("cva file $label", async ({ opts }) => {
  //     opts.styleConfigs = cvaConfig;
  //     await rollupBuild(opts);

  //     const buttonFile = `${outputDir}/cva/button.css`;
  //     const indexFile = `${outputDir}/cva/index.css`;

  //     expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
  //     expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

  //     expect(existsSync(buttonFile)).toBe(true);
  //     expect(existsSync(indexFile)).toBe(true);
  //   });

  //   test.each(cssTestCases)("sva file $label", async ({ opts }) => {
  //     opts.styleConfigs = svaConfig;
  //     await rollupBuild(opts);

  //     const alertFile = `${outputDir}/sva/alert.css`;
  //     const indexFile = `${outputDir}/sva/index.css`;

  //     expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
  //     expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

  //     expect(existsSync(alertFile)).toBe(true);
  //     expect(existsSync(indexFile)).toBe(true);
  //   });

  //   test.each(cssTestCases)("cva and sva files $label", async ({ opts }) => {
  //     opts.styleConfigs = configs;
  //     await rollupBuild(opts);

  //     const alertFile = `${outputDir}/alert.css`;
  //     const buttonFile = `${outputDir}/button.css`;
  //     const indexFile = `${outputDir}/index.css`;

  //     expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
  //     expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
  //     expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

  //     expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
  //     expect(existsSync(`${outputDir}/button.css`)).toBe(true);
  //     expect(existsSync(`${outputDir}/index.css`)).toBe(true);
  //   });
  // });
});
