// import { beforeEach, describe, expect, mock, test } from "bun:test";
// import { existsSync, readFileSync, rmdirSync } from "node:fs";
// import { cloneDeep } from "es-toolkit/object";
// import { cn, cva, sva } from "jade-garden";
// import type { Config } from "../src/types";
// import { buttonConfig, noBaseCVA, noNameCVA } from "./fixtures/jade-garden/cva";
// import { alertConfig, noNameSVA, noSlotsSVA } from "./fixtures/jade-garden/sva";
// import { targetDir as entry, getPath, outputDir, rootDir } from "./utils";

// type TestCase = { label: string; opts: Partial<Config> };

// describe("plugins", () => {
//   beforeEach(() => {
//     if (existsSync(targetDir)) rmdirSync(targetDir, { recursive: true });
//     mock.clearAllMocks();
//   });

//   const targetDir = getPath(`${rootDir}/jade-garden`);

//   const configs = { components: [alertConfig, buttonConfig] };
//   const noBaseAndSlots = { components: [noBaseCVA, noSlotsSVA] };
//   const noNames = { components: [noNameCVA, noNameSVA] };

//   const configTestCases: TestCase[] = [
//     {
//       label: "default",
//       opts: {
//         createOptions: {
//           useStylesheet: false
//         },
//         entry
//       }
//     },
//     {
//       label: 'with `configOutput` set to "js"',
//       opts: {
//         configOutput: "js",
//         createOptions: {
//           useStylesheet: false
//         },
//         entry
//       }
//     }
//   ];

//   const stylesheetTestCases: TestCase[] = [
//     {
//       label: "default",
//       opts: {
//         createOptions: {
//           useStylesheet: true
//         },
//         entry
//       }
//     },
//     {
//       label: "with `createOptions.prefix`",
//       opts: {
//         createOptions: {
//           prefix: "jg",
//           useStylesheet: true
//         },
//         entry
//       }
//     },
//     {
//       label: "with `createOptions.mergeFn`",
//       opts: {
//         createOptions: {
//           mergeFn: cn,
//           useStylesheet: true
//         },
//         entry
//       }
//     },
//     {
//       label: "with `createOptions.prefix` and `createOptions.mergeFn`",
//       opts: {
//         createOptions: {
//           mergeFn: cn,
//           prefix: "jg",
//           useStylesheet: true
//         },
//         entry
//       }
//     }
//   ];

//   const diffOutputTestCases = [
//     {
//       label: "components",
//       value: configTestCases[0]
//     },
//     {
//       label: "stylesheets",
//       value: stylesheetTestCases[0]
//     }
//   ];

//   describe("edge cases", () => {
//     test.each(diffOutputTestCases)("$label - empties `outDir`", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = configs;
//       await build(opts);

//       const fileFormat = opts.createOptions?.useStylesheet ? "css" : "ts";

//       expect(existsSync(`${outputDir}/alert.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/button.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/index.${fileFormat}`)).toBe(true);

//       opts.clean = true;
//       opts.components = { cva: [buttonConfig], sva: [alertConfig] };
//       await build(opts);

//       // Deleted files
//       expect(existsSync(`${outputDir}/alert.${fileFormat}`)).toBe(false);
//       expect(existsSync(`${outputDir}/button.${fileFormat}`)).toBe(false);
//       expect(existsSync(`${outputDir}/index.${fileFormat}`)).toBe(false);

//       // Written files
//       expect(existsSync(`${targetDir}/cva/button.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${targetDir}/cva/index.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${targetDir}/sva/alert.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${targetDir}/sva/index.${fileFormat}`)).toBe(true);
//     });

//     test.each(diffOutputTestCases)("$label - prevents name conflicts", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = { components: [alertConfig, alertConfig, buttonConfig, buttonConfig] };
//       await build(opts);

//       const fileFormat = opts.createOptions?.useStylesheet ? "css" : "ts";

//       expect(existsSync(`${outputDir}/alert.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/alert-1.${fileFormat}`)).toBe(false);
//       expect(existsSync(`${outputDir}/button.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/button-1.${fileFormat}`)).toBe(false);
//       expect(existsSync(`${outputDir}/index.${fileFormat}`)).toBe(true);
//     });
//   });

//   describe("no writes", () => {
//     test.each(diffOutputTestCases)("$label - no names", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = noNames;
//       await build(opts);

//       expect(existsSync(outputDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - no base", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = { components: [noBaseCVA] };
//       await build(opts);

//       expect(existsSync(outputDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - no slots", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = { components: [noSlotsSVA] };
//       await build(opts);

//       expect(existsSync(outputDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - no base and no slots", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = noBaseAndSlots;
//       await build(opts);

//       expect(existsSync(outputDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - `component` name contains reserved keywords", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = { components: [cva({ name: "index", base: "" }), sva({ name: "exports", slots: [] })] };

//       await build(opts);
//       expect(existsSync(outputDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - `components` is not valid", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       // @ts-expect-error: for testing
//       opts.components = "";

//       await build(opts);
//       expect(existsSync(targetDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - config value contains reserved keywords", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       opts.components = { index: [alertConfig], utils: [buttonConfig] };

//       await build(opts);
//       expect(existsSync(targetDir)).toBe(false);
//     });

//     test.each(diffOutputTestCases)("$label - invalid config value", async ({ value }) => {
//       const { opts: _opts } = value;
//       const opts = cloneDeep(_opts);
//       // @ts-expect-error: for testing
//       opts.components = { 1: { 2: undefined } };

//       await build(opts);
//       expect(existsSync(targetDir)).toBe(false);
//     });
//   });

//   describe("writes", () => {
//     test.each(stylesheetTestCases)("cva and sva files $label", async ({ opts }) => {
//       opts.components = configs;
//       await build(opts);

//       const alertFile = `${outputDir}/alert.css`;
//       const buttonFile = `${outputDir}/button.css`;
//       const dirIndex = `${outputDir}/index.css`;
//       const rootIndex = `${targetDir}/index.css`;

//       expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(dirIndex, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(rootIndex, { encoding: "utf-8" })).toMatchSnapshot();

//       expect(existsSync(`${outputDir}/alert.css`)).toBe(true);
//       expect(existsSync(`${outputDir}/button.css`)).toBe(true);
//       expect(existsSync(`${outputDir}/index.css`)).toBe(true);
//       expect(existsSync(`${targetDir}/index.css`)).toBe(true);
//     });

//     test.each(configTestCases)("cva and sva files $label", async ({ opts }) => {
//       const fileFormat = opts.configOutput ?? "ts";
//       opts.components = configs;
//       await build(opts);

//       const alertFile = `${outputDir}/alert.${fileFormat}`;
//       const buttonFile = `${outputDir}/button.${fileFormat}`;
//       const dirIndex = `${outputDir}/index.${fileFormat}`;
//       const rootIndex = `${targetDir}/index.${fileFormat}`;
//       const utils = `${targetDir}/utils.${fileFormat}`;

//       expect(readFileSync(alertFile, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(buttonFile, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(dirIndex, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(rootIndex, { encoding: "utf-8" })).toMatchSnapshot();
//       expect(readFileSync(utils, { encoding: "utf-8" })).toMatchSnapshot();

//       expect(existsSync(`${outputDir}/alert.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/button.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${outputDir}/index.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${targetDir}/index.${fileFormat}`)).toBe(true);
//       expect(existsSync(`${targetDir}/utils.${fileFormat}`)).toBe(true);
//     });
//   });
// });
