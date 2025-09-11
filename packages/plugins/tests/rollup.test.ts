import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import { cloneDeep } from "es-toolkit";
import postcss from "rollup-plugin-postcss";
import rollupPlugin from "unplugin-jade-garden/rollup";
import type { Options } from "../src/lib/types";
import { buttonConfig, noBaseCVA } from "./fixtures/jade-garden/cva";
import { alertConfig, noSlotsSVA } from "./fixtures/jade-garden/sva";
import {
  configs,
  configTestCases,
  cvaConfig,
  noBaseAndSlots,
  noNames,
  stylesheetTestCases,
  svaConfig
} from "./mocks/configs";
import { entryDir, outputDir, rootDir } from "./mocks/dirPaths";
import { build, getPath } from "./utils";

const targetDir = getPath(`${rootDir}/jade-garden`);

describe("rollup", () => {
  beforeEach(() => {
    if (existsSync(targetDir)) rmdirSync(targetDir, { recursive: true });
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
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = configs;
      await rollupBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      opts.clean = true;
      opts.styleConfigs = { cva: [buttonConfig], sva: [alertConfig] };
      await rollupBuild(opts);

      // Deleted files
      expect(existsSync(`${outputDir}/alert.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(false);

      // Written files
      expect(existsSync(`${targetDir}/cva/button.css`)).toBe(true);
      expect(existsSync(`${targetDir}/cva/index.css`)).toBe(true);
      expect(existsSync(`${targetDir}/sva/alert.css`)).toBe(true);
      expect(existsSync(`${targetDir}/sva/index.css`)).toBe(true);
    });

    test("prevents name conflicts", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
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
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noNames;
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noBaseCVA] };
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no slots", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noSlotsSVA] };
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });

    test("no base and no slots", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noBaseAndSlots;
      await rollupBuild(opts);

      expect(existsSync(outputDir)).toBe(false);
    });
  });

  describe("throws", () => {
    test("`configs` is not valid", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'string' is not assignable to type.
      opts.styleConfigs = "";
      expect(async () => await rollupBuild(opts)).toThrow();
    });

    test("invalid config value", async () => {
      const { opts: _opts } = stylesheetTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'undefined' is not assignable to type.
      opts.styleConfigs = { 1: { 2: undefined } };
      expect(async () => await rollupBuild(opts)).toThrow();
    });
  });

  describe("writes", () => {
    test.each(stylesheetTestCases)("cva file $label", async ({ opts }) => {
      opts.styleConfigs = cvaConfig;
      await rollupBuild(opts);

      const buttonFile = `${targetDir}/cva/button.css`;
      const indexFile = `${targetDir}/cva/index.css`;

      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(buttonFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(configTestCases)("cva file $label", async ({ opts }) => {
      const fileFormat = opts.configOutput ?? "ts";
      opts.styleConfigs = cvaConfig;
      await rollupBuild(opts);

      const buttonFile = `${targetDir}/cva/button.${fileFormat}`;
      const indexFile = `${targetDir}/cva/index.${fileFormat}`;

      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(buttonFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(stylesheetTestCases)("sva file $label", async ({ opts }) => {
      opts.styleConfigs = svaConfig;
      await rollupBuild(opts);

      const alertFile = `${targetDir}/sva/alert.css`;
      const indexFile = `${targetDir}/sva/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(alertFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(configTestCases)("sva file $label", async ({ opts }) => {
      const fileFormat = opts.configOutput ?? "ts";
      opts.styleConfigs = svaConfig;
      await rollupBuild(opts);

      const alertFile = `${targetDir}/sva/alert.${fileFormat}`;
      const indexFile = `${targetDir}/sva/index.${fileFormat}`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(alertFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(stylesheetTestCases)("cva and sva files $label", async ({ opts }) => {
      opts.styleConfigs = configs;
      await rollupBuild(opts);

      const alertFile = `${outputDir}/alert.css`;
      const buttonFile = `${outputDir}/button.css`;
      const indexFile = `${outputDir}/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });

    test.each(configTestCases)("cva and sva files $label", async ({ opts }) => {
      const fileFormat = opts.configOutput ?? "ts";
      opts.styleConfigs = configs;
      await rollupBuild(opts);

      const alertFile = `${outputDir}/alert.${fileFormat}`;
      const buttonFile = `${outputDir}/button.${fileFormat}`;
      const indexFile = `${outputDir}/index.${fileFormat}`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(`${outputDir}/alert.${fileFormat}`)).toBe(true);
      expect(existsSync(`${outputDir}/button.${fileFormat}`)).toBe(true);
      expect(existsSync(`${outputDir}/index.${fileFormat}`)).toBe(true);
    });
  });
});
