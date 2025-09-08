import { beforeEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync, rmdirSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import { cloneDeep } from "es-toolkit";
import vitePlugin from "unplugin-jade-garden/vite";
import type { Options } from "../src/lib/types";
import { buttonConfig, noBaseCVA } from "./fixtures/jade-garden/cva";
import { alertConfig, noSlotsSVA } from "./fixtures/jade-garden/sva";
import { configs, cvaConfig, noBaseAndSlots, noNames, svaConfig, throwsConfig, writeTestCases } from "./mocks/configs";
import { entryDir, outputDir, rootDir } from "./mocks/dirPaths";
import { build, getPath } from "./utils";

describe("vite", async () => {
  beforeEach(() => {
    const outputDir = getPath(`${rootDir}/jade-garden`);
    if (existsSync(outputDir)) rmdirSync(outputDir, { recursive: true });
  });

  const viteBuild = async (config: Options) => {
    await build.vite({
      clearScreen: false,
      plugins: [vitePlugin(config), tailwindcss()],
      build: {
        lib: {
          entry: entryDir,
          name: "TestLib"
        },
        outDir: getPath("./dist"),
        write: false
      }
    });
  };

  describe("edge cases", () => {
    test("empties `outDir`", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = configs;
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      opts.build = { clean: true };
      opts.styleConfigs = { components: { cva: [buttonConfig], sva: [alertConfig] } };
      await viteBuild(opts);

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
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      console.log(opts);
      opts.styleConfigs = throwsConfig;
      opts.build = { maxDepth: 10 };
      console.log(opts);
      await viteBuild(opts);

      const output = getPath(`${rootDir}/jade-garden/1/2/3/4/5/configs/components`);
      expect(existsSync(`${output}/alert.css`)).toBe(true);
      expect(existsSync(`${output}/button.css`)).toBe(true);
      expect(existsSync(`${output}/index.css`)).toBe(true);
    });

    test("prevents name conflicts", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [alertConfig, alertConfig, buttonConfig, buttonConfig] };
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
      expect(existsSync(`${outputDir}/alert-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/button.css`)).toBe(true);
      expect(existsSync(`${outputDir}/button-1.css`)).toBe(false);
      expect(existsSync(`${outputDir}/index.css`)).toBe(true);
    });
  });

  describe("no writes", () => {
    test("no names", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noNames;
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no base", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noBaseCVA] };
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no slots", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = { components: [noSlotsSVA] };
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });

    test("no base and no slots", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = noBaseAndSlots;
      await viteBuild(opts);

      expect(existsSync(`${outputDir}/index.css`)).toBe(true);

      const file = readFileSync(`${outputDir}/index.css`);
      expect(file.length).toBe(0);
    });
  });

  describe("throws", () => {
    test("`configs` is not valid", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'string' is not assignable to type.
      opts.styleConfigs = "";
      expect(async () => await viteBuild(opts)).toThrow();
    });

    test("exceeds `maxDepth`", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      opts.styleConfigs = throwsConfig;
      expect(async () => await viteBuild(opts)).toThrow();
    });

    test("invalid config value", async () => {
      const { opts: _opts } = writeTestCases[0];
      const opts = cloneDeep(_opts);
      // @ts-expect-error: Type 'undefined' is not assignable to type.
      opts.styleConfigs = { 1: { 2: undefined } };
      expect(async () => await viteBuild(opts)).toThrow();
    });
  });

  describe("writes", () => {
    test.each(writeTestCases)("cva file $label", async ({ opts }) => {
      opts.styleConfigs = cvaConfig;
      await viteBuild(opts);

      const buttonFile = `${outputDir}/cva/button.css`;
      const indexFile = `${outputDir}/cva/index.css`;

      expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(buttonFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(writeTestCases)("sva file $label", async ({ opts }) => {
      opts.styleConfigs = svaConfig;
      await viteBuild(opts);

      const alertFile = `${outputDir}/sva/alert.css`;
      const indexFile = `${outputDir}/sva/index.css`;

      expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
      expect(readFileSync(indexFile, { encoding: "utf-8" })).toMatchSnapshot();

      expect(existsSync(alertFile)).toBe(true);
      expect(existsSync(indexFile)).toBe(true);
    });

    test.each(writeTestCases)("cva and sva files $label", async ({ opts }) => {
      opts.styleConfigs = configs;
      await viteBuild(opts);

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
  });
});
