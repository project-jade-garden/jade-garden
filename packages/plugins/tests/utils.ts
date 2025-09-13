import { resolve } from "node:path";
import * as rspack from "@rspack/core";
import tailwindcss from "@tailwindcss/vite";
import * as rollup from "rollup";
import postcss from "rollup-plugin-postcss";
import { rollupPlugin, rspackPlugin, vitePlugin, webpackPlugin } from "unplugin-jade-garden";
import * as vite from "vite";
import * as webpack from "webpack";
import type { Options } from "../src/lib/types";

// * Paths
export const getPath = (entry: string) => resolve(__dirname, entry);
export const rootDir = "./fixtures/tailwindcss";
export const entryDir = getPath(`${rootDir}/index.js`);
export const outputDir = getPath(`${rootDir}/jade-garden/components`);
export const targetDir = getPath(`${rootDir}/app.css`);

// * Builds
export const rollupBuild: typeof rollup.rollup = rollup.rollup;
export const rspackBuild: typeof rspack.rspack = rspack.rspack;
export const viteBuild: typeof vite.build = vite.build;
export const webpackBuild: typeof webpack.webpack = webpack.webpack || (webpack as any).default || webpack;

export const builds: Record<"rollup" | "rspack" | "vite" | "webpack", (config: Options) => Promise<void>> = {
  rollup: async (config: Options) => {
    await rollupBuild({
      input: entryDir,
      plugins: [
        rollupPlugin(config),
        postcss({
          extract: true,
          plugins: [require("@tailwindcss/postcss")]
        })
      ]
    });
  },
  rspack: async (config: Options) => {
    await new Promise((resolve) => {
      rspackBuild(
        {
          entry: entryDir,
          plugins: [rspackPlugin(config)],
          module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: ["@tailwindcss/postcss"]
                      }
                    }
                  }
                ]
              }
            ]
          },
          output: {
            path: getPath("./dist")
          }
        },
        resolve
      );
    });
  },
  vite: async (config: Options) => {
    await viteBuild({
      clearScreen: false,
      plugins: [vitePlugin(config), tailwindcss()],
      build: {
        lib: {
          entry: entryDir,
          name: "TestLib"
        },
        outDir: getPath("./dist"),
        rollupOptions: {
          logLevel: "silent"
        },
        write: false
      },
      logLevel: "silent"
    });
  },
  webpack: async (config: Options) => {
    await new Promise((resolve) => {
      webpackBuild(
        {
          entry: entryDir,
          plugins: [webpackPlugin(config)],
          module: {
            rules: [
              {
                test: /\.css$/,
                use: [
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: ["@tailwindcss/postcss"]
                      }
                    }
                  }
                ]
              }
            ]
          },
          output: {
            path: getPath("./dist")
          }
        },
        resolve
      );
    });
  }
};
